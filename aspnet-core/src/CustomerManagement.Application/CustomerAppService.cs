using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace CustomerManagement
{
    public class CustomerAppService : ApplicationService, ICustomerAppService
    {
        private readonly IRepository<Customer, int> _customerRepository;

        public CustomerAppService(IRepository<Customer, int> customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task<CustomerDto> GetAsync(int id)
        {
            var customer = await _customerRepository.GetAsync(id);
            return ObjectMapper.Map<Customer, CustomerDto>(customer);
        }

        public async Task<List<CustomerDto>> GetAllAsync()
        {
            var items = await _customerRepository.GetListAsync();
            return ObjectMapper.Map<List<Customer>, List<CustomerDto>>(items);
        }

     public async Task<CustomerDto> CreateAsync(CustomerCreateUpdateDto input)
    {
       
            await CheckDuplicateNameOrAccountNumberAsync(input.Name, input.AccountNumber);

            var newItem = new Customer
            {
                Name = input.Name,
                PhoneNumber = input.PhoneNumber,
                AccountNumber = input.AccountNumber,
                DebtAmount = input.DebtAmount,
                IsPaid = input.IsPaid,
                IsActive = input.IsActive
            };

            newItem = await _customerRepository.InsertAsync(newItem);

            return ObjectMapper.Map<Customer, CustomerDto>(newItem);
        
    }


        public async Task<CustomerDto> UpdateAsync(int id, CustomerCreateUpdateDto input)
        {
            await CheckDuplicateNameOrAccountNumberAsync(input.Name, input.AccountNumber, id);

            var existingCustomer = await _customerRepository.GetAsync(id);
                existingCustomer.Name = input.Name;
                existingCustomer.PhoneNumber = input.PhoneNumber;
                existingCustomer.AccountNumber = input.AccountNumber;
                existingCustomer.DebtAmount = input.DebtAmount;
                existingCustomer.IsPaid = input.IsPaid;
                existingCustomer.IsActive = input.IsActive;

            var updatedCustomer = await _customerRepository.UpdateAsync(existingCustomer);

            return ObjectMapper.Map<Customer, CustomerDto>(updatedCustomer);
        }

        public async Task DeleteAsync(int id)
        {
            await _customerRepository.DeleteAsync(id);
        }

        public async Task ToggleActiveAsync(int id)
        {
            var customer = await _customerRepository.GetAsync(id);
            customer.IsActive = !customer.IsActive;
        }

        private async Task CheckDuplicateNameOrAccountNumberAsync(string name, string? accountNumber, int? customerId = null)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new UserFriendlyException("Name cannot be empty or whitespace.");
            }

            var existingNameCustomer = await _customerRepository.FirstOrDefaultAsync(c => c.Name == name);
            if (existingNameCustomer != null && (customerId == null || existingNameCustomer.Id != customerId))
            {
                throw new UserFriendlyException($"Customer with name {name} already exists.");
            }

            if (accountNumber != null)
            {
                var existingAccountNumberCustomer = await _customerRepository.FirstOrDefaultAsync(c => c.AccountNumber == accountNumber);
                if (existingAccountNumberCustomer != null && (customerId == null || existingAccountNumberCustomer.Id != customerId))
                {
                    throw new UserFriendlyException($"Customer with account number {accountNumber} already exists.");
                }
            }
        }
    }
}

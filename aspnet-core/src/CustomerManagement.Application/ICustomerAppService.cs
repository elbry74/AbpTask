using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace CustomerManagement
{
    public interface ICustomerAppService : IApplicationService
    {
        Task<CustomerDto> GetAsync(int id);
        Task<List<CustomerDto>> GetAllAsync();
        Task<CustomerDto> CreateAsync(CustomerCreateUpdateDto input);
        Task<CustomerDto> UpdateAsync(int id, CustomerCreateUpdateDto input);
        Task DeleteAsync(int id);
        Task ToggleActiveAsync(int id);
    }
}

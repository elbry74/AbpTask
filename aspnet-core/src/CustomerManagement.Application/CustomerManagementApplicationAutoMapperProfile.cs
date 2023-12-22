using AutoMapper;

namespace CustomerManagement;

public class CustomerManagementApplicationAutoMapperProfile : Profile
{
    public CustomerManagementApplicationAutoMapperProfile()
    {
        CreateMap<Customer, CustomerDto>();
        CreateMap<CustomerCreateUpdateDto, Customer>();
    }
}

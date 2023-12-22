using CustomerManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CustomerManagement;

[DependsOn(
    typeof(CustomerManagementEntityFrameworkCoreTestModule)
    )]
public class CustomerManagementDomainTestModule : AbpModule
{

}

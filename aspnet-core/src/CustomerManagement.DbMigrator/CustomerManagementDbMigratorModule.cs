using CustomerManagement.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace CustomerManagement.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(CustomerManagementEntityFrameworkCoreModule),
    typeof(CustomerManagementApplicationContractsModule)
    )]
public class CustomerManagementDbMigratorModule : AbpModule
{
}

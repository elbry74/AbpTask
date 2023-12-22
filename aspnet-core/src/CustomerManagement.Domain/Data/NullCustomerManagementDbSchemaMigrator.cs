using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CustomerManagement.Data;

/* This is used if database provider does't define
 * ICustomerManagementDbSchemaMigrator implementation.
 */
public class NullCustomerManagementDbSchemaMigrator : ICustomerManagementDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}

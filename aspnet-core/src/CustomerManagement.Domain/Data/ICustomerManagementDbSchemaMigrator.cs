using System.Threading.Tasks;

namespace CustomerManagement.Data;

public interface ICustomerManagementDbSchemaMigrator
{
    Task MigrateAsync();
}

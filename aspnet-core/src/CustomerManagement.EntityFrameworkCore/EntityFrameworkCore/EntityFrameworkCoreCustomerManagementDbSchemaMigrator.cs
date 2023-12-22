using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CustomerManagement.Data;
using Volo.Abp.DependencyInjection;

namespace CustomerManagement.EntityFrameworkCore;

public class EntityFrameworkCoreCustomerManagementDbSchemaMigrator
    : ICustomerManagementDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreCustomerManagementDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the CustomerManagementDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<CustomerManagementDbContext>()
            .Database
            .MigrateAsync();
    }
}

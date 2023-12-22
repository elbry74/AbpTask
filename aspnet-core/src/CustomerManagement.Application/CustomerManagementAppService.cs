using System;
using System.Collections.Generic;
using System.Text;
using CustomerManagement.Localization;
using Volo.Abp.Application.Services;

namespace CustomerManagement;

/* Inherit your application services from this class.
 */
public abstract class CustomerManagementAppService : ApplicationService
{
    protected CustomerManagementAppService()
    {
        LocalizationResource = typeof(CustomerManagementResource);
    }
}

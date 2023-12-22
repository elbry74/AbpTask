using CustomerManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CustomerManagement.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class CustomerManagementController : AbpControllerBase
{
    protected CustomerManagementController()
    {
        LocalizationResource = typeof(CustomerManagementResource);
    }
}

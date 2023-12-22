using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace CustomerManagement;

[Dependency(ReplaceServices = true)]
public class CustomerManagementBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "CustomerManagement";
}

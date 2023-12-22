using CustomerManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CustomerManagement.Permissions;

public class CustomerManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(CustomerManagementPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(CustomerManagementPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<CustomerManagementResource>(name);
    }
}

using Volo.Abp.Settings;

namespace CustomerManagement.Settings;

public class CustomerManagementSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(CustomerManagementSettings.MySetting1));
    }
}

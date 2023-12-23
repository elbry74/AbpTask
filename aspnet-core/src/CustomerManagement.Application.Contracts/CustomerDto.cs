using System;

namespace CustomerManagement
{
    public class CustomerDto
    {
        public int id { get; set; }
         public string Name { get; set; } = string.Empty;
        public string? AccountNumber { get; set; }
        public decimal DebtAmount { get; set; }
        public string? IsPaid { get; set; }
        public string? PhoneNumber { get; set; }
        public bool IsActive { get; set; }
    }
}

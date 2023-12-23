using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities.Auditing;

namespace CustomerManagement
{
    public class Customer : FullAuditedAggregateRoot<int>
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? AccountNumber { get; set; }
        public decimal DebtAmount { get; set; }
        public string? IsPaid { get; set; }
        public string? PhoneNumber { get; set; }
        public bool IsActive { get; set; }
    }
}

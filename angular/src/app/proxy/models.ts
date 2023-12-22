
export interface CustomerCreateUpdateDto {
  name?: string;
  accountNumber?: string;
  debtAmount: number;
  isPaid: boolean;
  phoneNumber?: string;
  isActive: boolean;
}

export interface CustomerDto {
  id: number;
  name?: string;
  accountNumber?: string;
  debtAmount: number;
  isPaid: boolean;
  phoneNumber?: string;
  isActive: boolean;
}

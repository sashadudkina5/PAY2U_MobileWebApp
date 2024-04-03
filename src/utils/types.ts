import { StringLiteral } from "typescript";

export type TSubmitHandler = React.FormEventHandler<HTMLFormElement>;

export interface IUserInactiveServiceCard {
  id: string;
  logo: string;
  name: string;
  cashback: number;
  is_subscribe: boolean;
}

export interface IUserInactiveServicesResponse {
  data: IUserInactiveServiceCard[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface IUserInactiveServiceInfo {
  id: string;
  name: string;
  logo: string;
  full_name: string;
  short_description: string;
  description: string;
  cashback: number;
  url: string;
}

export interface IServicePlanInfo {
  id: string;
  name?: string;
  description: string;
}

export interface IServicePlansResponse {
  data: IServicePlanInfo[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface IPlanCondition {
  count?: number;
  period?: string;
  price?: number;
}

export interface IPlanInfo {
  id: string;
  name?: string;
  description: string;
  condition?: IPlanCondition;
  special_condition?: IPlanCondition;
  trial_period?: IPlanCondition;
}

export interface IServiceCategory {
  id: string;
  name: string;
}

export interface IServiceCategoriesResponse {
  data: IServiceCategory[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface IPopularService {
  id: string;
  logo: string;
  cashback: number;
}

export interface IPopularServicesResponse {
  data: IPopularService[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface ICategoryPoster {
  id: string;
  image: string;
  title: string;
}

export interface ICategoryPostersResponse {
  data: ICategoryPoster[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface IPaymentItem {
  id: string;
  logo: string;
  service_name: string;
  tariff_name: string;
  cashback: number;
  price: number;
  status_cashback: boolean;
  date: string;
}

export interface IPaymentHistoryResponse {
  data: IPaymentItem[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface IActiveSubscriptionItem {
  id: string;
  logo: string;
  service_name: string;
  tariff_name: string;
  count: number;
  period: string;
  price: number;
  payment_date: string;
  end_date: string;
  trial_period_end_date: string;
  is_active: number;
}

export interface IActiveSubscriptionResponse {
  data: IActiveSubscriptionItem[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface ISuspendedSubscriptionItem {
  id: string;
  logo: string;
  service_name: string;
  tariff_name: string;
  count: number;
  period: string;
  price: number;
  payment_date: string;
  end_date: string;
  trial_period_end_date: string;
  is_active: number;
}

export interface ISuspendedSubscriptionResponse {
  data: IActiveSubscriptionItem[];
  previousLink: string | null;
  nextLink: string | null;
}

export interface ISubscriptionInfo {
  id: string;
  logo: string;
  service_name: string;
  tariff_name: string;
  cashback: number;
  payment_date: string;
  end_date: string;
  trial_period_end_date: string;
  phone_number: string;
  price: number;
}

export type TAuthState = {
  loggedIn: boolean;
  isLoading: boolean;
  loginError: null | any;
  registerError: null | any;
};

export type TAddNewSubscriptionState = {
  addedSuccess: boolean;
  isLoading: boolean;
  error: null | any;
  newAdded: {
    id: string;
    logo: string;
    service_name: string;
    tariff_name: string;
    cashback: number;
    payment_date: string;
    end_date: string;
    trial_period_end_date: string;
    phone_number: string;
    price: number;
  } | null;
};

export type TCategoryExpensesItem = {
  name: string;
  expenses: number;
};

export type TCategoryExpensesResponse = {
  data: {
    name: string;
    expenses: number;
  }[];
};

export type TTotalExpensesResponse = {
  expenses: number;
};

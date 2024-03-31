import { Test, TestingModule } from '@nestjs/testing';

import { ShopifyApiService } from '../api.shopify.service';
import { ShopifyOrderService } from './order.shopify.service';

describe('ShopifyOrderService', () => {
  let service: ShopifyOrderService;
  let shopifyApiService: ShopifyApiService;

  const mockOrderData = {
    id: 4985632194693,
    admin_graphql_api_id: 'gid://shopify/Order/4985632194693',
    app_id: 84338540545,
    browser_ip: null,
    buyer_accepts_marketing: false,
    cancel_reason: null,
    cancelled_at: null,
    cart_token: null,
    checkout_id: null,
    checkout_token: null,
    client_details: null,
    closed_at: null,
    company: null,
    confirmation_number: '5UZZGDH59',
    confirmed: true,
    contact_email: null,
    created_at: '2024-03-15T07:52:23-04:00',
    currency: 'ILS',
    current_subtotal_price: '164.00',
    current_subtotal_price_set: {
      shop_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
    },
    current_total_additional_fees_set: null,
    current_total_discounts: '0.00',
    current_total_discounts_set: {
      shop_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
    },
    current_total_duties_set: null,
    current_total_price: '164.00',
    current_total_price_set: {
      shop_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
    },
    current_total_tax: '0.00',
    current_total_tax_set: {
      shop_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
    },
    customer_locale: null,
    device_id: null,
    discount_codes: [],
    email: '',
    estimated_taxes: false,
    financial_status: 'paid',
    fulfillment_status: null,
    landing_site: null,
    landing_site_ref: null,
    location_id: null,
    merchant_of_record_app_id: null,
    name: '#1003',
    note: null,
    note_attributes: [],
    number: 3,
    order_number: 1003,
    order_status_url:
      'https://nitzan-test2.myshopify.com/56306565253/orders/fd790df5d769980cfe9c62fb37002ffc/authenticate?key=b3c4b812b08a4fef9cd0405058a2839c',
    original_total_additional_fees_set: null,
    original_total_duties_set: null,
    payment_gateway_names: [],
    phone: null,
    po_number: null,
    presentment_currency: 'ILS',
    processed_at: '2024-03-15T07:52:23-04:00',
    reference: null,
    referring_site: null,
    source_identifier: null,
    source_name: '84338540545',
    source_url: null,
    subtotal_price: '164.00',
    subtotal_price_set: {
      shop_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
    },
    tags: '',
    tax_exempt: false,
    tax_lines: [],
    taxes_included: false,
    test: false,
    token: 'fd790df5d769980cfe9c62fb37002ffc',
    total_discounts: '0.00',
    total_discounts_set: {
      shop_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
    },
    total_line_items_price: '164.00',
    total_line_items_price_set: {
      shop_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
    },
    total_outstanding: '164.00',
    total_price: '164.00',
    total_price_set: {
      shop_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '164.00',
        currency_code: 'ILS',
      },
    },
    total_shipping_price_set: {
      shop_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
    },
    total_tax: '0.00',
    total_tax_set: {
      shop_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
      presentment_money: {
        amount: '0.00',
        currency_code: 'ILS',
      },
    },
    total_tip_received: '0.00',
    total_weight: 0,
    updated_at: '2024-03-15T07:53:26-04:00',
    user_id: null,
    billing_address: null,
    customer: null,
    discount_applications: [],
    fulfillments: [],
    line_items: [
      {
        id: 12300605751429,
        admin_graphql_api_id: 'gid://shopify/LineItem/12300605751429',
        attributed_staffs: [],
        current_quantity: 4,
        fulfillable_quantity: 4,
        fulfillment_service: 'manual',
        fulfillment_status: null,
        gift_card: false,
        grams: 1000,
        name: "Dumbbells' - 1 kg",
        price: '5.00',
        price_set: {
          shop_money: {
            amount: '5.00',
            currency_code: 'ILS',
          },
          presentment_money: {
            amount: '5.00',
            currency_code: 'ILS',
          },
        },
        product_exists: true,
        product_id: 6914492137605,
        properties: [],
        quantity: 4,
        requires_shipping: true,
        sku: '',
        taxable: true,
        title: "Dumbbells'",
        total_discount: '0.00',
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'ILS',
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'ILS',
          },
        },
        variant_id: 40498849251461,
        variant_inventory_management: 'shopify',
        variant_title: '1 kg',
        vendor: 'chen new',
        tax_lines: [],
        duties: [],
        discount_allocations: [],
      },
      {
        id: 12300605784197,
        admin_graphql_api_id: 'gid://shopify/LineItem/12300605784197',
        attributed_staffs: [],
        current_quantity: 2,
        fulfillable_quantity: 2,
        fulfillment_service: 'manual',
        fulfillment_status: null,
        gift_card: false,
        grams: 100,
        name: 'Football - Medium',
        price: '12.00',
        price_set: {
          shop_money: {
            amount: '12.00',
            currency_code: 'ILS',
          },
          presentment_money: {
            amount: '12.00',
            currency_code: 'ILS',
          },
        },
        product_exists: true,
        product_id: 6914491809925,
        properties: [],
        quantity: 2,
        requires_shipping: true,
        sku: '',
        taxable: true,
        title: 'Football',
        total_discount: '0.00',
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'ILS',
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'ILS',
          },
        },
        variant_id: 40498848170117,
        variant_inventory_management: 'shopify',
        variant_title: 'Medium',
        vendor: 'chen new',
        tax_lines: [],
        duties: [],
        discount_allocations: [],
      },
      {
        id: 12300605816965,
        admin_graphql_api_id: 'gid://shopify/LineItem/12300605816965',
        attributed_staffs: [],
        current_quantity: 3,
        fulfillable_quantity: 3,
        fulfillment_service: 'manual',
        fulfillment_status: null,
        gift_card: false,
        grams: 0,
        name: 'Hat - M',
        price: '40.00',
        price_set: {
          shop_money: {
            amount: '40.00',
            currency_code: 'ILS',
          },
          presentment_money: {
            amount: '40.00',
            currency_code: 'ILS',
          },
        },
        product_exists: true,
        product_id: 6914491580549,
        properties: [],
        quantity: 3,
        requires_shipping: true,
        sku: '',
        taxable: true,
        title: 'Hat',
        total_discount: '0.00',
        total_discount_set: {
          shop_money: {
            amount: '0.00',
            currency_code: 'ILS',
          },
          presentment_money: {
            amount: '0.00',
            currency_code: 'ILS',
          },
        },
        variant_id: 40498847744133,
        variant_inventory_management: 'shopify',
        variant_title: 'M',
        vendor: 'Testing store chen 12',
        tax_lines: [],
        duties: [],
        discount_allocations: [],
      },
    ],
    payment_terms: null,
    refunds: [],
    shipping_address: null,
    shipping_lines: [],
  };

  const transformedMockOrderData = {
    id: '4985632194693',
    name: '#1003',
    priceDetails: {
      shopPrice: {
        amount: 164,
        currency: 'ILS',
      },
      presentmentPrice: {
        amount: 164,
        currency: 'ILS',
      },
    },
    items: [
      {
        id: '12300605751429',
        name: "Dumbbells' - 1 kg",
        weight: 4,
        weightUnit: 4,
        priceDetails: {
          shopPrice: {
            amount: 5,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 5,
            currency: 'ILS',
          },
        },
        productId: '6914492137605',
        quantity: 1,
        sku: '',
        variantId: '40498849251461',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605751429',
        name: "Dumbbells' - 1 kg",
        weight: 4,
        weightUnit: 4,
        priceDetails: {
          shopPrice: {
            amount: 5,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 5,
            currency: 'ILS',
          },
        },
        productId: '6914492137605',
        quantity: 1,
        sku: '',
        variantId: '40498849251461',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605751429',
        name: "Dumbbells' - 1 kg",
        weight: 4,
        weightUnit: 4,
        priceDetails: {
          shopPrice: {
            amount: 5,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 5,
            currency: 'ILS',
          },
        },
        productId: '6914492137605',
        quantity: 1,
        sku: '',
        variantId: '40498849251461',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605751429',
        name: "Dumbbells' - 1 kg",
        weight: 4,
        weightUnit: 4,
        priceDetails: {
          shopPrice: {
            amount: 5,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 5,
            currency: 'ILS',
          },
        },
        productId: '6914492137605',
        quantity: 1,
        sku: '',
        variantId: '40498849251461',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605784197',
        name: 'Football - Medium',
        weight: 2,
        weightUnit: 2,
        priceDetails: {
          shopPrice: {
            amount: 12,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 12,
            currency: 'ILS',
          },
        },
        productId: '6914491809925',
        quantity: 1,
        sku: '',
        variantId: '40498848170117',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605784197',
        name: 'Football - Medium',
        weight: 2,
        weightUnit: 2,
        priceDetails: {
          shopPrice: {
            amount: 12,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 12,
            currency: 'ILS',
          },
        },
        productId: '6914491809925',
        quantity: 1,
        sku: '',
        variantId: '40498848170117',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605816965',
        name: 'Hat - M',
        weight: 3,
        weightUnit: 3,
        priceDetails: {
          shopPrice: {
            amount: 40,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 40,
            currency: 'ILS',
          },
        },
        productId: '6914491580549',
        quantity: 1,
        sku: '',
        variantId: '40498847744133',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605816965',
        name: 'Hat - M',
        weight: 3,
        weightUnit: 3,
        priceDetails: {
          shopPrice: {
            amount: 40,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 40,
            currency: 'ILS',
          },
        },
        productId: '6914491580549',
        quantity: 1,
        sku: '',
        variantId: '40498847744133',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
      {
        id: '12300605816965',
        name: 'Hat - M',
        weight: 3,
        weightUnit: 3,
        priceDetails: {
          shopPrice: {
            amount: 40,
            currency: 'ILS',
          },
          presentmentPrice: {
            amount: 40,
            currency: 'ILS',
          },
        },
        productId: '6914491580549',
        quantity: 1,
        sku: '',
        variantId: '40498847744133',
        tax: {
          shopPrice: {
            amount: null,
          },
          presentmentPrice: {
            amount: null,
          },
        },
      },
    ],
  };

  let testingOrder;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShopifyOrderService,
        {
          provide: ShopifyApiService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ShopifyOrderService>(ShopifyOrderService);
    shopifyApiService = module.get<ShopifyApiService>(ShopifyApiService);

    shopifyApiService.get = jest
      .fn()
      .mockResolvedValueOnce({ data: { order: mockOrderData } });

    testingOrder = await service.findOne(mockOrderData.id + '');
  });

  it('should get shopify order by ID', async () => {
    expect(testingOrder).toEqual(mockOrderData);
  });

  it('should transform shopify order data correctly', () => {
    const transformedOrder = service.transformResponseData(testingOrder);

    expect(transformedMockOrderData).toEqual(transformedOrder);
  });
});

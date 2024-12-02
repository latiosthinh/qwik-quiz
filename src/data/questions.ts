export const questions = [
	{
		"question": "Which of the following code snippets hides the BuyQuantityGetFreeShipping promotion on a site?",
		"answerOptions": [
			{ "isCorrect": true, "answer": `var promotionTypeHandler = ServiceLocator.Current.GetInstance<PromotionTypeHandler>();\n
promotionTypeHandler.DisablePromotions(new[] {typeof(BuyQuantityGetFreeShipping)});` },
			{ "answer": `var promotionTypeHandler = ServiceLocator.Current.GetInstance<PromotionTypeHandler>();\n
promotionTypeHandler.DisablePromotions("BuyQuantityGetFreeShipping");` },
			{ "answer": `var promotionTypeHandler = ServiceLocator.Current.GetInstance<PromotionTypeHandler>();\n
promotionTypeHandler.DisableShippingPromotion("BuyQuantityGetFreeShipping");` },
			{ "answer": `var promotionTypeHandler = ServiceLocator.Current.GetInstance<PromotionTypeHandler>();\n
promotionTypeHandler.DisablePromotions("BuyQuantityGetFreeShipping");` }
		],
		"isCode": true
	},
	{
		"question": "A client requires that organizations have different price lists for products. Which of the following options is the best way to do this?",
		"answerOptions": [
			{ "answer": `Create a custom implementation of PriceService that uses an external service to calculate the price` },
			{ "answer": `Extend the metadata for pricing to record the Sales Price Code, and also extend the organization metadata to hold the Customer Group.\n
Create a custom implementation of IPriceService to calculate the price` },
			{ "answer": `When adding prices, assign a Sales Price Type to each price. Assign each customer to a Customer Group. Pass the Customer Group within the Price Filter when calculating the price`,
				"isCorrect": true,
			},
			{ "answer": `When adding prices, assign a Sales Price Type to each price then assign each customer to a Customer Group` }
		],
	},
	{
		"question": "Which of the following static methods retrieves a logged in commerce user?",
		"answerOptions": [
			{ "answer": `CustomerContext.CurrentUser` },
			{ "answer": `HttpContext.CurrentContact` },
			{ "answer": `HttpContext.CurrentUser` },
			{ "answer": `CustomerContext.CurrentContact`,
				"isCorrect": true,
			},
		],
		"isCode": true
	},
	{
		"question": "Which of the following is the primary purpose of the Remove Expired Carts scheduled job in Commerce?",
		"answerOptions": [
			{ "answer": `It removes carts which had promotions applied to them, meaning the promotion has expired` },
			{ "answer": `It removes unused shipment methods, meaning they were not accessed or used in a specific time frame` },
			{ "answer": `It removes carts that are expired, meaning they were not accessed for a specified number of days`,
				"isCorrect": true,
			},
			{ "answer": `It removes expired purchase orders, meaning they were not accessed or edited for a number of days` }
		],
	},
	{
		"question": "Which of the following commands installs an empty Commerce site?",
		"answerOptions": [
			{ "answer": `dotnet new epi-commerce` },
			{ "answer": `dotnet new epi-empty` },
			{ "answer": `dotnet new epi-commerce-empty`,
				"isCorrect": true,
			},
			{ "answer": `dotnet new epi-empty-commerce` }
		],
		"isCode": true
	},
	{
		"question": "Which of the following code snippets can invalidate the entire catalog cache?",
		"answerOptions": [
			{ "answer": `CatalogCache.Clear()`,
				"isCorrect": true,
			},
			{ "answer": `Catalog.Clear()` },
			{ "answer": `Catalog ClearCache0` },
			{ "answer": `CatalogCache Removed` }
		],
	},
	{
		"question": "A fastener store sells nails and screws. Each nail or screw has a material (such as zinc or copper), a purpose (such as wood or sheet metal) and a size. There are one million total sellable items in the catalog. Which of the following catalog layouts provides the most efficient catalog performance?",
		"answerOptions": [
			{ "answer": `A "Nail" category and a 'Screw category containing SKUs for each individual sellable item, using associations to link them to groups of material` },
			{ "answer": `A "Nail product and a Screw product related to SKUs for each individual sellable item.` },
			{ "answer": `A hierarchy of type (rails and screws), material and purpose categories containing products, each related to SKUs for each size of the product`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "All of the following types can be inherited from a custom promotion except one. Which is the exception?",
		"answerOptions": [
			{ "answer": `OrderPromotion` },
			{ "answer": `PromotionData`,
				"isCorrect": true,
			},
			{ "answer": `ShippingPromotion` },
			{ "answer": `EntryPromotion` }
		],
	},
	{
		"question": "Which of the following code snippets returns prices from the cache during a default implementation?",
		"answerOptions": [
			{ "answer": `IEnumerable<IPriceValue> GetPrices(MarketId market, DataTime validOn, CatalogKey catalogKey, PriceFilter filter);` },
			{ "answer": `public interface IPriceDetailService{ IPriceDetailValue List(long priceValueId); }` },
			{ "answer": `public interface IPriceDetailService { IList<IPriceDetailValue> List(contentReference CatalogContentReference); }`,
				"isCorrect": true,
			},
			{ "answer": `public interface IPriceDetailService { IPriceDetailValue Get(long priceValueId) }` }
		],
		"isCode": true
	},
	{
		"question": "What happens if a new cart uses the same combination of name, market, and owner of an existing cart?",
		"answerOptions": [
			{ "answer": `The existing cart will be overridden and a new cart created` },
			{ "answer": `A new cart will be created.` },
			{ "answer": `Two carts will be created.` },
			{ "answer": `An error will be thrown`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following actions is the best way to restrict a shipping method so that it is only available for specific regions within a market?",
		"answerOptions": [
			{ "answer": `Create a custom shipping provider that implements the custom logic` },
			{ "answer": `Create a custom implementation ShippingValidator to apply the filter logic` },
			{ "answer": `Specify the markets, countries, and regions for which the shipping method is valid in the shipping method admin interface`,
				"isCorrect": true,
			},
			{ "answer": `Configure shipping option restrictions in the configuration file` }
		],
	},
	{
		"question": "Which of the following methods allows the developer to retrieve a catalog entry code from a content reference?",
		"answerOptions": [
			{ "answer": `IContentRepository.GetCode(contentRef)` },
			{ "answer": `ILinkRepository.GetCatalogCode(contentRef)` },
			{ "answer": `ReferenceConverter.GetCode(contentRef)`,
				"isCorrect": true,
			},
			{ "answer": `IContentRepository.LoadCode(contentRef)` }
		],
		"isCode": true
	},
	{
		"question": "Which of the following code snippets removes all associations of a category except its primary relations?",
		"answerOptions": [
			{ "isCorrect": true,
				"answer": `private readonly IRelationRepository _relationRepository;\n
public void RemoveRelationsOfCategory(ContentReference category) {\n
 var allRelations = _findClient.Search<NodeEntryRelation>()\n
 .Filter(c => c.Parent.ID.Match(category.ID))\n
 .GetResult();\n
 _relationRepository.RemoveRelations(allRelations.Where(c => !c.IsPrimary));\n
}` },
			{ "answer": `private readonly IRelationRepository _relationRepository;\n
public void RemoveRelationsOfCategory(ContentReference category) {\n
var allRelations = _findClient.Search<NodeEntryRelation>()\n
 .Filter(c => c.Parent.ID.Match(category.ID))\n
 .GetResult();\n
 _relationRepository.RemoveRelations(allRelations.Where(c => c.Primary));\n
}` },
			{ "answer": `private readonly IRelationRepository _relationRepository;\n
public void RemoveRelationsOfCategory(ContentReference category) {\n
var allRelations = _findClient.Search<NodeEntryRelation>()\n
 .Filter(c => c.Parent.ID.Match(category.ID))\n
 .GetResult();\n
 _relationRepository.RemoveRelations(allRelations.Where(c => !c.Primary));\n
}` }
		],
		"isCode": true
	},
	{
		"question": "Which of the following calculation services calculates the extended price, discounted price or sales tax for a line item?",
		"answerOptions": [
			{ "answer": `Return an item calculator` },
			{ "answer": `Line item calculator`,
				"isCorrect": true,
			},
			{ "answer": `Order form calculator` },
			{ "answer": `Shipping calculator` }
		],
	},
	{
		"question": `A price manager sets three prices for an item that are identical except:\n
+  All Customers, Minimum Quantity 0, Unit Price 10\n
+  All Customers, Minimum Quantity 10, Unit Price 20\n
+  Returning Customers, Minimum Quantity 0, Unit Price 30\n
Which of the following total prices is returned for a Returning Customer ordering 20 units?
`,
		"answerOptions": [
			{ "answer": `200`,
				"isCorrect": true,
			},
			{ "answer": `300` },
			{ "answer": `400` },
			{ "answer": `600` }
		],
	},
	{
		"question": "Which of the following is the built-in way in Commerce to calculate taxes in checkout code?",
		"answerOptions": [
			{ "answer": `The system calculates taxes automatically when it converts a cart to a purchase order` },
			{ "answer": `Use the CatalogTaxManager class` },
			{ "answer": `The system automatically calculates taxes when it saves a cart if the VariationContent TaxCategory field is set`,
				"isCorrect": true,
			},
			{ "answer": `Call Get Total(orderGroup) on an instance of the IOrderGroupCalculator` }
		],
	},
	{
		"question": "A product listing page performs poorly because the corresponding controller uses the current category. Which of the following should a developer do to improve page performance?",
		"answerOptions": [
			{ "answer": `Use RelationRepository.GetChildren <NodeEntryFellations to get children of current category. then use IContentLoader Gathers with batching to load the contents` },
			{ "answer": `Use a document-based index search to build the product listing feature`,
				"isCorrect": true,
			},
			{ "answer": `Implement cache for the result of IContentLoader.GetChildren` },
			{ "answer": `Reduce the number of items displayed per page for product listings.` }
		],
	},
	{
		"question": "Which of the following methods prevents specific promotions from appearing when editing discounts?",
		"answerOptions": [
			{ "answer": `promotionTypeHandler.DisablePromotions`,
				"isCorrect": true,
			},
			{ "answer": `promotionTypeHandler.RemovePromotions` },
			{ "answer": `promotionTypeHandler.HiddenPromotions` },
			{ "answer": `promotionTypeHandler.DisableBuiltinPromotions` }
		],
		"isCode": true
	},
	{
		"question": "Categories with a large number of items use a simplified Ul mode. Which of the following values is the default value of items per category that enables this mode?",
		"answerOptions": [
			{ "answer": `1000` },
			{ "answer": `2000`,
				"isCorrect": true,
			},
			{ "answer": `5000` },
			{ "answer": `10000` }
		],
	},
	{
		"question": "Which of the following attributes associates CustomVariation to an existing meta-class from the following code snippet?",
		"answerOptions": [
			{ "answer": `CatalogContentType`,
				"isCorrect": true,
			},
			{ "answer": `MetadataType` },
			{ "answer": `ContentCatalog Type` },
			{ "answer": `ContentType` }
		],
	},
	{
		"question": "Which of the following code snippets corrects and decrements available stock by three units for the inventory system?",
		"answerOptions": [
			{ "answer": `var theChange = new InventoryChange { WarehouseCode = "default", CatalogEntryCode = "Shirt_1", PurchaseAvailableChange = -3 };\n
_inventoryService.Adjust(theChange);
`,
				"isCorrect": true,
			},
			{ "answer": `var record = new InventoryRecord { WarehouseCode = "default", AdditionalQuantity = -3, CatalogEntryCode = "Shirt_1" }\n
_inventoryService.Update(new[] {record});
` },
			{ "answer": `var requestItem = new InventoryRequestItem { WarehouseCode = "default", CatalogEntryCode = "Shirt_1", Quantity = -3, RequestType = InventoryRequestType.Custom };` },
		],
		"isCode": true
	},
	{
		"question": "Which of the following statements is true about the EPIServer.Commerce Order ReturnOrderFormCalculator interface?",
		"answerOptions": [
			{ "answer": `It can calculate taxes on an IReturnOrderForm` },
			{ "answer": `It can calculate totals on an IReturnOrderForm`,
				"isCorrect": true,
			},
			{ "answer": `It can calculate discounts on IReturnOrderForm` },
			{ "answer": `It can calculate shipment on IReturnOrderForm` }
		],
	},
	{
		"question": "Which of the following interfaces should the developer implement and register to provide user specific pricing logic for multiple prices?",
		"answerOptions": [
			{ "answer": `IPriceService`,
				"isCorrect": true,
			},
			{ "answer": `IPriceOptimize` },
			{ "answer": `IPricePresentation` },
			{ "answer": `IPriceSelector` }
		],
	},
	{
		"question": "Where are shipping methods configured in Commerce versions below 14?",
		"answerOptions": [
			{ "answer": `CMS > Admin > Content Types` },
			{ "answer": `Commerce Manager > Customer Manager > Order System > Shipping Methods` },
			{ "answer": `Order Management > Shipping Methods` },
			{ "answer": `Commerce Manager> Administration > Order System > Shipping Methods`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following actions should a developer use to resolve a class requiring a dependency?",
		"answerOptions": [
			{ "answer": `Create a property of type Injected<T> (ie, public injected<ContentLoaders> Loader {get; set}` },
			{ "answer": `Inject Constructor parameter (e. public MyClass(ContentLoader loader))`,
				"isCorrect": true,
			},
			{ "answer": `Use ServiceLocator (e, ServiceLocator.Current GetInstance <ContentLoader>())` },
			{ "answer": `Instantiate within the class (i.e., var loader new ContentLoader())` },
		],
		"isCode": true
	},
	{
		"question": "Which of the following options is the best way to retrieve a list of prices for a SKU?",
		"answerOptions": [
			{ "answer": `Call the GetPrices(...) method of the IPriceService`,
				"isCorrect": true,
			},
			{ "answer": `Call the method GetCatalogEntryDot(currentContentCode, new CatalogEntryResponseGroup(CatalogEntryResponseGroup.ResponseGroup.CatalogEntryFull).SalePrice at the implementation of ICatalogSystem` },
			{ "answer": `Call the GetCustomerPrices(...) extension method for a SKU with a full set of parameters and set the ReturnCustomerPricing to true` },
			{ "answer": `Call the GetCustomerPrices() extension method for a SKU without parameters` }
		],
		"isCode": true
	},
	{
		"question": "Which of the following interfaces lets a developer add custom rules for price evaluation using the default implementation of PriceService? ",
		"answerOptions": [
			{ "answer": `IPriceOptimizer`,
				"isCorrect": true,
			},
			{ "answer": `IOrderGroupCalculator` },
			{ "answer": `ILineItemCalculator` },
			{ "answer": `IOrderGroupBuilder` }
		],
	},
	{
		"question": "To retrieve Related Entries for the current product in the Product Controller, which Commerce interface should you use?",
		"answerOptions": [
			{ "answer": `IRelationRepository` },
			{ "answer": `IContentLoader` },
			{ "answer": `IContentRepository` },
			{ "answer": `IAssociationRepository`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following tracks the owners of a cart? ",
		"answerOptions": [
			{ "answer": `Sessions` },
			{ "answer": `Database values` },
			{ "answer": `Cookies`,
				"isCorrect": true,
			},
			{ "answer": `Local storage` }
		],
	},
	{
		"question": "Which of the following fines of code registers a new order status?",
		"answerOptions": [
			{ "answer": `OrderStatus.Add("PendingReview") ` },
			{ "answer": `OrderStatus.Add(256, "PendingReview");` },
			{ "answer": `OrderStatus.RegisterStatus(new Status("PendingReview"))` },
			{ "answer": `OrderStatus.RegisterStatus(new OrderStatus(256, "PendingReview"))`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "A developer has a product code. Which of the following code snippets should the developer use to get a ContentReference to the product?",
		"answerOptions": [
			{ "answer": `ServiceLocator.Current.GetInstance: AssociationRepository>().GetAssociation\n
s(productCode)` },
			{ "answer": `ServiceLocator.Current.GetInstance: ReferenceConverter().getContentLink(productCode)`,
				"isCorrect": true,
			},
			{ "answer": `ServiceLocator.Current.GetInstance: ContentLoader>().GetProductContent>(productCode)` },
			{ "answer": `new ContentReference(productCode)` }
		],
		"isCode": true
	},
	{
		"question": "What is the default value in minutes for NodeCacheExpiration?",
		"answerOptions": [
			{ "answer": `5` },
			{ "answer": `10` },
			{ "answer": `15`,
				"isCorrect": true,
			},
			{ "answer": `20` }
		],
	},
	{
		"question": "What is the default cache time for catalogs?",
		"answerOptions": [
			{ "answer": `15 minutes`,
				"isCorrect": true,
			},
			{ "answer": `20 minutes` },
			{ "answer": `30 minutes` },
			{ "answer": `45 minutes` }
		],
	},
	{
		"question": "All of the statements about the catalog modeling API are true except one. Which is the exception?",
		"answerOptions": [
			{ "answer": `The ICatalogSystem interface includes a DIO-based API` },
			{ "answer": `The IContentLoader is used to load details of a catalog content. ` },
			{ "answer": `The IContentRepository interface is used to work with both page and catalog modeling.` },
			{ "answer": `The DTO-based API relies on the underlying ContentRepository API`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following components are needed for the Product Catalog and Order Subsystem to function?",
		"answerOptions": [
			{ "answer": `Pattern and Coding Style ` },
			{ "answer": `Dynamic Data Store (DDS) ` },
			{ "answer": `Metadata Plus`,
				"isCorrect": true,
			},
			{ "answer": `Business Foundation` }
		],
	},
	{
		"question": "Site xyz.com has various media types with similar media description extensions. Which of the following controls media types when uploading to the assets pane?",
		"answerOptions": [
			{ "answer": `AssetResolver` },
			{ "answer": `ContentMediaResolver`,
				"isCorrect": true,
			},
			{ "answer": `ContentResolver` },
			{ "answer": `ContentAssetsResolver` }
		],
	},
	{
		"question": "Which of the following code snippets is the correct way to get entries in a bundle? ",
		"answerOptions": [
			{ "answer": `var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();\n
var bundleEntries = contentLoader.GetChildren<BundleEntry>(contentReference);` },
			{ "answer": `var relationRepository = ServiceLocator.Current.GetInstance<IRelocationRepository>();\n
var bundleEntries = relationRepository.GetParents<BundleEntry>(contentReference);` },
			{ "answer": `var bundleEntries = DataFactory.Instance.GetChildren<BundleEntry>(contentReference);` },
			{ "answer": `var relationRepository = ServiceLocator.Current.GetInstance<IRelationRepository>();\n
var bundleEntries = relationRepository.GetChildren<BundleEntry>(contentReference);`,
				"isCorrect": true,
			},
		],
		"isCode": true
	},
	{
		"question": "Which of the following attributes decorates a new Content type when it is created? ",
		"answerOptions": [
			{ "answer": `[CatalogContent]` },
			{ "answer": `[CatalogType] ` },
			{ "answer": `[ContentType] `,
				"isCorrect": true,
			},
			{ "answer": `[CatalogContentType]` }
		],
	},
	{
		"question": "Which of the following interfaces and methods should you use to save a price programmatically?",
		"answerOptions": [
			{ "answer": `IPriceService.Save()` },
			{ "answer": `IPriceDetailServices.Save()`,
				"isCorrect": true,
			},
			{ "answer": `IPriceService.Publish()` },
			{ "answer": `IPricingServices.Save()` }
		],
		"isCode": true
	},{
		"question": "Which of the following are the default discount types in Commerce Cloud? ",
		"answerOptions": [
			{ "answer": `Item, Market, Shipping ` },
			{ "answer": `Item. Market, Order` },
			{ "answer": `Item, Order. Shipping Market, Consumer` },
			{ "answer": `Item, Order, Shipping`,
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following rules offers the best discount possible for a customer where discount A gives 20% off all items and discount gives 40% off for items in a specific category, but only one of these discounts can apply to each item? ",
		"answerOptions": [
			{ "answer": `Make sure A has higher priority than B. excludes Band enable the order level exclusion` },
			{ "answer": `Make sure B has higher priority than A, excludes A and enable the order level exclusion` },
			{ "answer": `Make sure B has higher priority than A, excludes A and enable the unit level exclusion.`,
				"isCorrect": true,
			},
			{ "answer": `Make sure A has higher priority than B, excludes B and enable the unit level exclusion` }
		],
	},
	{
		"question": "Which of the following code snippets allows custom logic to compute the extended price of line items?",
		"answerOptions": [
			{ "answer": `public class CustomLineItemCalculator: DefaultLineItemCalculator \n
protected override Decimal CalculateExtendedPrice(ILineItem lineItem, Currency currency) ` },
			{ "answer": `public class CustomLineItemCalculator: DefaultLineItemCalculator \n
protected override Money CalculateExtendedPrice(ILineItem lineItem, Currency currency) `,
				"isCorrect": true,
			},
			{ "answer": `public class CustomLineItemCalculator: DefaultLineItemCalculator \n
protected override Decimal ComputeExtendedPrice(ILineItem lineItem, Currency currency)` },
			{ "answer": `public class CustomLineItemCalculator : DefaultLineItemCalculator \n
protected override Money ComputeExtendedPrice(ILineItem LineItem, Currency currency) ` }
		],
		"isCode": true
	},
	{
		"question": "Which of the following actions facilitates scaling?",
		"answerOptions": [
			{ "answer": "Ensure the web server has substantial secondary storage." },
			{ "answer": "Ensure caching of short-lived data. ",
				"isCorrect": true,
			},
			{ "answer": "Use Ling to query data" },
			{ "answer": "Avoid processing data in memory by off-loading it to the database server" },
		],
	},
	{
		"question": "Which of the following events does the CatalogKeyEventBroadcaster class register?",
		"answerOptions": [
			{ "answer": "InventoryUpdated",
				"isCorrect": true,
			},
			{ "answer": "CatalogUpdated" },
			{ "answer": "EntryUpdated" },
			{ "answer": "AssociationUpdated" },
		],
	},
	{
		"question": "Which of the following code snippets results in meta-fields being removed from meta-classes?",
		"answerOptions": [
			{ "answer": `var metaClass = MediaChase.MetaDataPlus.Configurator.MetaClass.Load(OrderContext.MetaDataContext, "WorkOrder");\n
metaClass.DeleteFields("BidPrice");` },
			{ "answer": `var metaClass = MediaChase.MetaDataPlus.Configurator.MetaClass.Load(OrderContext.MetaDataContext, "WorkOrder");\n
metaClass.RemoveFields("BidPrice");
` },
			{ "answer": `var metaClass = MediaChase.MetaDataPlus.Configurator.MetaClass.Load(OrderContext.MetaDataContext, "WorkOrder");\n
metaClass.DeleteField("BidPrice");`,
				"isCorrect": true,
			},
			{ "answer": `var metaClass = MediaChase.MetaDataPlus.Configurator.MetaClass.Load(OrderContext.MetaDataContext, "WorkOrder");\n
metaClass.RemoveField("BidPrice");` },
		],
		"isCode": true
	},
	{
		"question": "Which of the following is the purpose of the Find Catalog URI Conflicts scheduled job when it analyzes the database?",
		"answerOptions": [
			{ "answer": "To find products and bundles that have different Names an URL under the same parent Category" },
			{ "answer": "To find entries and categories that have the same Name in URL under the same parent category.",
				"isCorrect": true,
			},
			{ "answer": "To search variants and categories that have similar Names in URL under the same child categories" },
			{ "answer": "To search assets and categories that have the same Name in the URL under the same child category." },
		],
	},
	{
		"question": "Which of the following statements best reflects the EPiServer Commerce Order ReturnLineItemCalculator interface functionality?",
		"answerOptions": [
			{ "answer": "Calculates the handling total price for an IReturnItem" },
			{ "answer": "Calculates the extended price for an IReturnLineItem",
				"isCorrect": true,
			},
			{ "answer": "Calculates the return price for an IReturnOrderForm" },
			{ "answer": "Calculates the discounted price for a IPurchaseOrder" },
		],
	},
	{
		"question": "Which of the following is a way to increase the Read performance of Business Foundation objects for a custom Business Foundation class in a solution?",
		"answerOptions": [
			{ "answer": "Use the Load method (instead of the Execute method) with Request and Response object." },
			{ "answer": "Use the MetaClassManager to implement custom caching" },
			{ "answer": "Enable caching in one of the Business Foundation config files.",
				"isCorrect": true,
			},
			{ "answer": "Create a caching layer on top of the BusinessManager" },
		],
	},
	{
		"question": "All of the following scenarios about the EffectiveCustomerGroup are true except for one. Which is the exception?",
		"answerOptions": [
			{ "answer": "If the CustomerContact is associated with an Organization and that Organization has a CustomerGroup assigned, then EffectiveCustomerGroup return the Organization's CustomerGroup" },
			{ "answer": "EffectiveCustomerGroup is used in pricing and promotions instead of the regular CustomerGroup" },
			{ "answer": "CustomerGroup is used in pricing and promotions instead of EffectiveCustomerGroup",
				"isCorrect": true,
			},
			{ "answer": "If no Organization is assigned to the CustomerContact or if the assigned Organization does not have a CustomerGroup assigned, then EffectiveCustomerGroup returns the CustomerGroup recorded on the CustomerContact record itself. " },
		],
	},
	{
		"question": "Which of the following Option configuration classes disables features like SerializableCarts? ",
		"answerOptions": [
			{ "answer": "ApplicationOptions" },
			{ "answer": "OrderOptions" },
			{ "answer": "FeatureOptions",
				"isCorrect": true,
			},
			{ "answer": "GlobalOptions" },
		],
	},
	{
		"question": "Which of the following statements is true about the globalized catalog content? ",
		"answerOptions": [
			{ "answer": "Content creation is available for enabled and configured languages" },
			{ "answer": "The same languages must be enabled in all catalogs" },
			{ "answer": "Catalogs have the same set of languages enabled as the CMS by default",
				"isCorrect": true,
			},
			{ "answer": "Fallback rules can be configured in the Catalog Ul interface" },
		],
	},
	{
		"question": "Which of the following methods changes the inventory of a specific entry in the catalog?",
		"answerOptions": [
			{ "answer": "InventoryChange.ChangeQuantity()" },
			{ "answer": "InventoryChange.Adjust()",
				"isCorrect": true,
			},
			{ "answer": "InventoryChange.Decrement()" },
			{ "answer": "InventoryChange.Increment()" },
		],
	},
	{
		"question": "Which of the following code snippets is most likely the cause of poor site performance when a product page loads slowly?",
		"answerOptions": [
			{ "answer": `var defaultPrice = ServiceLocator.Current.GetInstance<IPriceService>().GetDefaultPrice(marketId, DateTime.UtcNow, new CatalogKey(product.Code), Currency.USD)` },
			{ "answer": `var relatedEntries = ServiceLocator.Current.GetInstance<IRelationRepository>().GetChildEntries(productLink);` },
			{ "answer": `var categoriesContent = ServiceLocator.Current.GetInstance<IContentLoader>().Get<NodeContent>(product.Categories.ContentLink);` },
			{ "answer": `var siblingProductLinks = ServiceLocator.Current.GetInstance<IContentLoader>().GetDescendants(parentNodeLink).where(c => ServiceLocator.Current.GetInstance<ReferenceConverter>().GetContentType(c) == CatalogContentType.CatalogEntry)`,
				"isCorrect": true,
			},
		],
		"isCode": true
	},
	{
		"question": "A developer wants to schedule a promotion that starts before a campaign's scheduled dates. Which of the following will be the result?",
		"answerOptions": [
			{ "answer": "The promotion will not be available to use until its scheduled date and will be considered a future promotion" },
			{ "answer": "The promotion will only be scheduled if it is an Item level promotion because only Item level promotions can overlap the campaign's scheduled dates" },
			{ "answer": "The promotion will only be scheduled if it is a Shipping level promotion because only Shipping level promotions can overlap the campaign's scheduled dates" },
			{ "answer": "The promotion will not be scheduled because a promotion cannot overlap its campaign scheduled date",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following methods is the best way to calculate the shipping rate if a developer uses an external service?",
		"answerOptions": [
			{ "answer": "Create an implementation using the interface ShippingCalculator that calls the external service." },
			{ "answer": "Create an implementation using the interface ShippingPlugin that calls the external service.",
				"isCorrect": true,
			},
			{ "answer": "Create an implementation using the interface ShippingGateway that calls the external service." },
			{ "answer": "Calculate the costs during the checkout stage, and assign the total to the order." },
		],
	},
	{
		"question": "When a scheduled job is launched, which of the following is the default time value of the DatabaseIndices JobCommandTimeOut parameter for a database index that needs to be reorganized?",
		"answerOptions": [
			{ "answer": "15 seconds" },
			{ "answer": "20 seconds" },
			{ "answer": "30 seconds",
				"isCorrect": true,
			},
			{ "answer": "1 minute" },
		],
	},
	{
		"question": "Which of the following configuration options allows automatic creation of database schema upon site initialization?",
		"answerOptions": [
			{ "answer": "CMS > DynamicDataAccessOptions > CreateDatabaseSchema = true" },
			{ "answer": "CMS > DataAccessOptions > CreateDatabaseSchema = true",
				"isCorrect": true,
			},
			{ "answer": "CMS > ContentOptions> CreateDatabaseSchema = true" },
			{ "answer": "CMS > DataAccessOptions > UpdateDatabaseSchema = true" },
		],
	},
	{
		"question": "Which of the following is the correct assembly of InitializableModule?",
		"answerOptions": [
			{ "answer": "EPiServer.Core.Initialization" },
			{ "answer": "EPiServer.Framework.Initialization" },
			{ "answer": "EPiServer.Core" },
			{ "answer": "EPiServer.Framework",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "How are discounts to an Cart item evaluated and applied in C#? ",
		"answerOptions": [
			{ "answer": "promotionEngine.RunDiscounts (cart);" },
			{ "answer": "cart.ApplyDiscounts (promotionEngine, new PromotionEngineSettings<));",
				"isCorrect": true,
			},
			{ "answer": "cart.calculateDiscounts (promotionEngine)," },
			{ "answer": "promotionEngine.ApplyDiscount[cart, new PromotionEngineSettings()]," },
		],
		"isCode": true
	},
	{
		"question": "How does Optimizely Commerce Cloud determine which discount gets applied when multiple discounts are to be used with a product assuming no customizations are made to the promotion engine?",
		"answerOptions": [
			{ "answer": "The promotion engine evaluates all active promotional discounts and applies the discount with the largest savings for the customer." },
			{ "answer": "The promotion engine evaluates all active promotional discounts and applies the discount with the smallest savings for the customer." },
			{ "answer": "The promotion engine applies the most recently added active discount." },
			{ "answer": "The promotion engine applies the discount in order of a Discount Priority value determined",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following code snippets shows the correct way of rounding the price of a lineItem for any currentCurrency?",
		"answerOptions": [
			{ "answer": "Money itemPrice new Money (lineItem.ListPrice, currentCurrency).Round(2); " },
			{ "answer": "Money itemPrice new Money (Math.Round(lineItem.ListPrice), currentCurrency);" },
			{ "answer": "Money itemPrice new Money (lineItem.ListPrice, currentCurrency).Round();",
				"isCorrect": true,
			},
			{ "answer": "Money itemPrice new Money (Math.Round(lineItem.ListPrice, 2), currentCurrency);" },
		],
	},
	{
		"question": "Which of the following outcomes occurs when an anonymous buyer has items in their cart and logs into the site?",
		"answerOptions": [
			{ "answer": "The cart will be empty" },
			{ "answer": "Both carts will be merged into a single cart ",
				"isCorrect": true,
			},
			{ "answer": "The logged in cart value will be overridden by the anonymous cart" },
			{ "answer": "The anonymous cart will be overridden by the logged in cart" },
		],
	},
	{
		"question": "Which of the following code snippets can get price details for an entry with paging?",
		"answerOptions": [
			{ "answer": `public IList<IPriceDetailValue> ListPriceDetailValueWithPaging(ContentReference catalogContentReference, int offset, int numberOfItems, out int totalCount)\n
{\n
	var priceDetailService = ServiceLocator.Current.GetInstance<IPriceService>();\n
	return priceDetailService.GetPrices(catalogContentReference, offset, numberOfItems, out totalCount);\n
}` },
			{ "answer": `public IList<IPriceDetailValue> ListPriceDetailValueWithPaging(ContentReference catalogContentReference, int offset, int numberOfItems, out int totalCount)\n
{\n
	var priceDetailService = ServiceLocator.Current.GetInstance<IPriceDetailService>();\n
	return priceDetailService.List(catalogContentReference, offset, numberOfItems, out totalCount);\n
}`,
				"isCorrect": true,
			},
			{ "answer": `public IList<IPriceDetailValue> ListPriceDetailValueWithPaging(ContentReference catalogContentReference, int offset, int numberOfItems, out int totalCount)\n
{\n
	var priceService = ServiceLocator.Current.GetInstance<IPriceService>();\n
	return priceService.List(catalogContentReference, offset, numberOfItems, out totalCount);\n
}` },
			{ "answer": `public IList<IPriceDetailValue> ListPriceDetailValueWithPaging(ContentReference catalogContentReference, int offset, int numberOfItems, out int totalCount)\n
{\n
	var priceService = ServiceLocator.Current.GetInstance<IPriceService>();\n
	return priceService.GetPrices(catalogContentReference, offset, numberOfItems, out totalCount);\n
}` },
		],
		"isCode": true
	},
	{
		"question": "Which of the following interfaces should the developer use to display pricing information while implementing an admin Ul component?",
		"answerOptions": [
			{ "answer": "IPriceDetailService",
				"isCorrect": true,
			},
			{ "answer": "IShippingGateway" },
			{ "answer": "IPaymentGateway" },
			{ "answer": "IPriceService" },
		],
	},
	{
		"question": "Which of the following events calculates promotion conditions when using a customized promotion?",
		"answerOptions": [
			{ "answer": "bool CanBeFulfilled(TPromotionData promotionData, PromotionProcessorContext context)",
				"isCorrect": true,
			},
			{ "answer": "RewardDescription Evaluate(PromotionData promotionData, PromotionProcessorContext context)" },
			{ "answer": "RewardDescription NotFulfilledRewardDescription(TPromotionData promotionData, PromotionProcessorContext context, FullfillmentStatus fulfillmentStatus)" },
			{ "answer": "RedemptionDescription CreateRedemptionDescription(AffectedEntries affectedEntries)" },
		],
		"isCode": true
	},
	{
		"question": "Which of the following promotion types applies a reward to an entire order?",
		"answerOptions": [
			{ "answer": "OrderPromotion",
				"isCorrect": true,
			},
			{ "answer": "EntryPromotion" },
			{ "answer": "Shipping Promotion" },
			{ "answer": "CustomerPromotion" },
		],
	},
	{
		"question": "Which of the following options defines the purpose of PCI standards?",
		"answerOptions": [
			{ "answer": "The standards ensure that a site complies with site usability standards" },
			{ "answer": "The standards minimize the risk of password compromise" },
			{ "answer": "The standards prevent cross-site scripting vulnerabilities on a site" },
			{ "answer": "The standards reduce the risk of customer credit card information being stolen",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following scenarios happens when a merchandiser deletes a category containing catalog entries?",
		"answerOptions": [
			{ "answer": "All catalog entries in the category will be deleted, regardless of the type of entry and category relations for these" },
			{ "answer": "The deleted category is moved to the wastebasket. " },
			{ "answer": "Any catalog entries linked only to the category being deleted will be deleted as well.",
				"isCorrect": true,
			},
			{ "answer": "Only the category itself will be deleted Catalog entries in the category will be available in the catalog root level" },
		],
	},
	{
		"question": "Which of the following content types can have inventory records in a default installation?",
		"answerOptions": [
			{ "answer": "Variation",
				"isCorrect": true,
			},
			{ "answer": "Category" },
			{ "answer": "Catalog" },
			{ "answer": "Product" },
		],
	},
	{
		"question": "Which of the following techniques is considered best practice for creating a Purchase Order Number? ",
		"answerOptions": [
			{ "answer": "Implementing OrderNumberGenerator",
				"isCorrect": true,
			},
			{ "answer": "Assigning a new value to IPurchaseOrder.OrderNumber after it is created" },
			{ "answer": "Assigning a new value to PurchaseOrder. Tracking Number after it is created" },
			{ "answer": "Modifying the database each time a purchase order is created" },
		],
	},
	{
		"question": "Which of the following outcomes happens if multiple order level promotions are configured on the same cart total?",
		"answerOptions": [
			{ "answer": "The first order level promotion is sorted by created date, descending" },
			{ "answer": "The first order level promotion is the one whose expiration date is closest in comparison to others." },
			{ "answer": "The first order level promotion is the one set as top priority.",
				"isCorrect": true,
			},
			{ "answer": "The first order level promotion is sorted by updated date, descending." },
		],
	},
	{
		"question": "Which of the following deployment modes involves deploying to Slot?",
		"answerOptions": [
			{ "answer": "Direct" },
			{ "answer": "Hybrid" },
			{ "answer": "Complete" },
			{ "answer": "Package",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following optimized services should be used on a public-facing site to read prices for an entry?",
		"answerOptions": [
			{ "answer": "IPriceOptimizer" },
			{ "answer": "IPriceDetailService" },
			{ "answer": "IReadonlyPriceService" },
			{ "answer": "IPriceService",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following extension methods helps support the creation of a landing page that lists items that belong to a particular campaign?",
		"answerOptions": [
			{ "answer": "GetPromotionItemsForCampaign(cart)" },
			{ "answer": "GetPromotionItemsForCampaign(campaignReference)",
				"isCorrect": true,
			},
			{ "answer": "GetPromotionsItems(campaignReference)" },
			{ "answer": "GetAllPromotionsItems(order)" },
		],
		"isCode": true
	},
	{
		"question": "Which of the following Pricing Services edits/updates prices?",
		"answerOptions": [
			{ "answer": "IPriceDetailService",
				"isCorrect": true,
			},
			{ "answer": "IPriceService" },
			{ "answer": "IPriceValue" },
			{ "answer": "IPriceDetailValue" },
		],
	},
	{
		"question": "Which of the following roles should be assigned to a user who needs to manage the product catalog, but should not have access to the commerce administration interface?",
		"answerOptions": [
			{ "answer": "Product Managers" },
			{ "answer": "CatalogManagers",
				"isCorrect": true,
			},
			{ "answer": "CatalogAdmins" },
			{ "answer": "CatalogEditors" },
		],
	},{
		"question": "What base type does VariationContent inherit from?",
		"answerOptions": [
			{ "answer": "NodeContent" },
			{ "answer": "CatalogContent" },
			{ "answer": "ProductContent" },
			{ "answer": "EntryContentBase",
				"isCorrect": true,
			},
		],
	},
	{
		"question": `What does the "Find Catalog URI conflicts" scheduled job do if it identifies entries and categories with the same name in the URL (under the same parent category)?`,
		"answerOptions": [
			{ "answer": "Generates an error report" },
			{ "answer": "Logs them as warnings",
				"isCorrect": true,
			},
			{ "answer": "Deletes them" },
			{ "answer": "Fixes them" },
		],
	},
	{
		"question": `A Commerce Administrator opened a variant in the Catalog UI and went to the Inventory tab. The Administrator noticed that the "Is Tracked" property was disabled for the Default Warehouse.\n
In this scenario, which of the following statement is correct?
`,
		"answerOptions": [
			{ "answer": "Default Warehouse settings are inherited by all other warehouses so there is no limit to the amount of stock that can be sold for this variant in all other warehouses." },
			{ "answer": "The requested quantities are not updated when this setting is disabled." },
			{ "answer": "There is a limit to the amount of stock that can be sold for this variant from the Default Warehouse only." },
			{ "answer": "The requested quantities are updated but available counts do not change",
				"isCorrect": true,
			},
		],
	},
	{
		"question": "Which of the following attributes associates Custom Variation to an existing meta-class from the following code snippet?",
		"answerOptions": [
			{ "answer": "using EPiServer.Commerce.Catalog.ContentTypes;" },
			{ "answer": "using EPiServer.Commerce.Catalog.DataAnnotations;" },
			{ "answer": "namespace CodeSamples. EPiServer.Commerce.Catalog. Provider" },
			{ "answer": "public class CustomVariation: variationContent",
				"isCorrect": true,
			},
		],
		"isCode": true
	},
	{
		"question": `All of the following content types have EntryContentBase as the base class except one. Which is the exception?`,
		"answerOptions": [
			{ "answer": `Product` },
			{ "answer": `Variation ` },
			{ "answer": `Bundle ` },
			{ "answer": `Category`,
				"isCorrect": true
			},
		]
	},
	{
		"question": `Which of the following naming conventions is the default name for the connection string used in Commerce?`,
		"answerOptions": [
			{ "answer": `"EpiServer:Databases:Commerce"` },
			{ "answer": `"ConnectionStrings:EPiServerDB"` },
			{ "answer": `"ConnectionStrings:EcfSqlConnection"`,
				"isCorrect": true
			},
			{ "answer": `The connection string is set in the CMS database` },
		]
	},{
		"question": `How do you refer a newly-created, strongly-typed model class as an existing meta data class in MetaDataPlus?`,
		"answerOptions": [
			{ "answer": `Decorate the model class with the CatalogContentType attribute and set the MetaClassName property to the name of the meta data class.`,
				"isCorrect": true
			},
			{ "answer": `Decorate the model class with the CatalogContentType attribute and set the ID property to the ID of the meta data class.` },
			{ "answer": `Create an initialization module and register the connection using the IContentTypeRepository service.` },
			{ "answer": `Create an initialization module and register the connection using the IContentRepository service. ` },
		]
	},
	{
		"question": `Which is the default search provider for the EPiServer.Commerce.Core package? `,
		"answerOptions": [
			{ "answer": `LuceneFindProvider ` },
			{ "answer": `LucenesSearchProvider` },
			{ "answer": `LuceneSearchProvider`,
				"isCorrect": true
			},
			{ "answer": `EpiserverLuceneSearchProvider` },
		]
	},
	{
		"question": `Which of the following types is inherited when creating a new Category content type?`,
		"answerOptions": [
			{ "answer": `CategoryContent` },
			{ "answer": `NodeContent`,
				"isCorrect": true
			},
			{ "answer": `NodeContentBase` },
			{ "answer": `RootContent` },
		]
	},{
		"question": `When does the database update after a category's prices are updated in the Pricing overview? `,
		"answerOptions": [
			{ "answer": `Together with other content changes for the entry when published. ` },
			{ "answer": `Instantly during editing. `,
				"isCorrect": true
			},
			{ "answer": `Together with the inventory information when this is changed. ` },
			{ "answer": `When "schedule for publish" has been set. ` },
		]
	},
	{
		"question": `What happens when a product with variations is linked to an additional Weekly Specials category?`,
		"answerOptions": [
			{ "answer": `A link of type Association will be created for the product pointing to the Weekly Specials category.` },
			{ "answer": `The product will be detached from the category where it originally resided.` },
			{ "answer": `The Weekly Specials category will be listed as a relation for the product.` },
			{ "answer": `An event of IContentEvents will be triggered.`,
				"isCorrect": true
			},
		]
	},
	{
		"question": `How do you access the media connected to a product? `,
		"answerOptions": [
			{ "answer": `Use the VariantsReference property on an instance of a ProductContent.` },
			{ "answer": `Use the CommerceMediaCollection property on an instance of a content type. `,
				"isCorrect": true
			},
			{ "answer": `Call the GetChildren method on an instance of IContentRepository. ` },
			{ "answer": `Use the Image or File properties of a MetaClass in MetaDataPlus. ` },
		]
	},
	{
		"question": `Which content type is commerce root content? `,
		"answerOptions": [
			{ "answer": `CatalogEntry` },
			{ "answer": `CatalogNode` },
			{ "answer": `Catalog` },
			{ "answer": `Root`,
				"isCorrect": true
			},
		]
	},
	{
		"question": `Which of the following statement is true for the EntryContent Catalog (ECF Catalog system)?`,
		"answerOptions": [
			{ "answer": `Must be the child of a Catalog or CatalogNode. `,
				"isCorrect": true
			},
			{ "answer": `You can move Catalog Entry Outside of Catalog. ` },
			{ "answer": `Can be the parent of Catalog or CatalogNode. ` },
			{ "answer": `You can link Catalog Node Outside the Catalog also.` },
		]
	},
	{
		"question": `Which statement best reflects one main characteristic of catalog structures? `,
		"answerOptions": [
			{ "answer": `You need categories to be able to use Context classes for retrieving product data from the catalog. ` },
			{ "answer": `You can only attach assets to models in the catalog structure that inherit from EntryContentBase. ` },
			{ "answer": `You can use a renderer to apply categories when creating catalog browsing features. `,
				"isCorrect": true
			},
			{ "answer": `You cannot have variations without products in a catalog structure.` },
		]
	},
	{
		"question": `Which statement is true about describing packages? `,
		"answerOptions": [
			{ "answer": `A package is comprised of multiple SKU's. When you add it to a cart it is added as a single SKU, and has it's own specific pricing and inventory.`,
				"isCorrect": true
			},
			{ "answer": `A package is comprised of multiple SKU's. When added to the cart, the individual SKU's are added rather than the package, at which point the SKU's are managed as individual items. ` },
			{ "answer": `The pricing for a package is automatically calculated, based on the SKU's defined in the package. ` },
			{ "answer": `A bundle and a package are different names for exactly the same thing. ` },
		]
	},
	{
		"question": `Which class can be used to hide promotion types from appearing on the Edit Discount view? `,
		"answerOptions": [
			{ "answer": `PromotionTypeHandler class `,
				"isCorrect": true
			},
			{ "answer": `DisablePromotionTypeHandler class ` },
			{ "answer": `RemovePromotionType class ` },
			{ "answer": `HidePromotionTypeHandler class` },
		]
	},
	{
		"question": `Which of the following is true about the MetaField in the Commerce subsystem?`,
		"answerOptions": [
			{ "answer": `Multiple MetaFields can exists with same name or type.` },
			{ "answer": `The MetaField type cannot be changed once created.` },
			{ "answer": `The MetaField cannot be created through code.` },
			{ "answer": `The MetaField type can be changed at any time.`,
				"isCorrect": true
			},
		]
	},
	{
		"question": `Which MetaClass adds a custom property to a Purchase Order? `,
		"answerOptions": [
			{ "answer": `PurchaseOrderMetaClass` },
			{ "answer": `OrderGroupMetaClass`,
				"isCorrect": true
			},
			{ "answer": `OrderItemMetaClass` },
			{ "answer": `ShipmentMetaClass` },
		]
	},
	{
		"question": `Which of the following options have caching?`,
		"answerOptions": [
			{ "answer": `IPriceService`,
				"isCorrect": true
			},
			{ "answer": `IPriceDetailService` },
			{ "answer": `Both A and B` },
			{ "answer": `IPriceDetailValue` },
		]
	},
	{
		"question": `Which of the following is needed to successfully create a new cart for a customer under a different market context?`,
		"answerOptions": [
			{ "answer": `Add the user to the target market and then save the cart.` },
			{ "answer": `Change the current market using ICurrentMarket.SetCurrentMarket and then save the cart.` },
			{ "answer": `Change the current market using IMarket and then save the cart.`,
				"isCorrect": true
			},
			{ "answer": `Pass an instance of IMarket into the save method` },
		]
	},
	{
		"question": `When does the database update after a category's prices are updated in the Pricing overview?`,
		"answerOptions": [
			{ "answer": `Together with other content changes for the entry when published.` },
			{ "answer": `Instantly during editing.`,
				"isCorrect": true
			},
			{ "answer": `Together with the inventory information when this is changed.` },
			{ "answer": `When "schedule for publish" has been set.` },
		]
	},
	{
		"question": `What is the best catalog structure for a site that has 5,000 sellable items, including watches in stainless steel and titanium and wallets in leather and rexine?`,
		"answerOptions": [
			{ "answer": `Create all items as variations under the root catalog.` },
			{ "answer": `Create a product for Watches and another for Wallets and put color or size as variations.` },
			{ "answer": `Create a category with name Store with subcategories by material type.` },
			{ "answer": `Create a category for Watches and another for Wallets with subcategories by material type.`,
				"isCorrect": true
			},
		]
	},
	{
		"question": `What happens to child nodes if a catalog is deleted?`,
		"answerOptions": [
			{ "answer": `The whole catalog is deleted.` },
			{ "answer": `The system does not delete children related to other categories in different catalogs.`,
				"isCorrect": true
			},
			{ "answer": `The system does not delete children related to other categories within the same catalog.` },
			{ "answer": `You cannot remove a catalog` },
		]
	},
	{
		"question": `Which of the following classes can have prices?`,
		"answerOptions": [
			{ "answer": `ProductContent` },
			{ "answer": `BundleContent` },
			{ "answer": `PackageContent`,
				"isCorrect": true
			},
			{ "answer": `EntryContentBase` },
		]
	},
]

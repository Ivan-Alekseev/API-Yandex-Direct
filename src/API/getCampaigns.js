export const objTypeCampaigns = {//Типы кампаний
    TEXT:"TEXT_CAMPAIGN",
    MOBILE_APP:"MOBILE_APP_CAMPAIGN",
    DYNAMIC_TEXT:"DYNAMIC_TEXT_CAMPAIGN",
    CPM_BANNER:"CPM_BANNER_CAMPAIGN",
    SMART:"SMART_CAMPAIGN",
}


const fnSelectionCriteria = (//Фильтр
    // Id, 
    TypeCampaigns
    ) => {
    const res = {}
    // if(Id){
    //     console.log(Id);
    //     res["Ids"] = Id.map(Id => `${Id}`);
    // }
    
    if(TypeCampaigns){
        const filterTypeCampaigns = [];
        if(TypeCampaigns === objTypeCampaigns.TEXT) {filterTypeCampaigns.push(objTypeCampaigns.TEXT)}
        if(TypeCampaigns === objTypeCampaigns.MOBILE_APP) {filterTypeCampaigns.push(objTypeCampaigns.MOBILE_APP)}   
        if(TypeCampaigns === objTypeCampaigns.DYNAMIC_TEXT) {filterTypeCampaigns.push(objTypeCampaigns.DYNAMIC_TEXT)}   
        if(TypeCampaigns === objTypeCampaigns.CPM_BANNER) {filterTypeCampaigns.push(objTypeCampaigns.CPM_BANNER)}   
        if(TypeCampaigns === objTypeCampaigns.SMART) {filterTypeCampaigns.push(objTypeCampaigns.SMART)}   
        
        res["Types"] = filterTypeCampaigns;
    }

    return res;
}
const objFieldNames = {
    Id:"Id",
    Name:"Name",
    Type:"Type",//Тип кампании
    BlockedIps : "BlockedIps",
    ExcludedSites : "ExcludedSites",
    Currency : "Currency",
    DailyBudget : "DailyBudget",
    Notification : "Notification",
    EndDate : "EndDate",
    Funds : "Funds",
    ClientInfo : "ClientInfo",
    NegativeKeywords : "NegativeKeywords",
    RepresentedBy : "RepresentedBy",
    StartDate : "StartDate",
    Statistics : "Statistics",
    State : "State",
    Status : "Status",
    StatusPayment : "StatusPayment",
    StatusClarification : "StatusClarification",
    SourceId : "SourceId",
    TimeTargeting : "TimeTargeting",
    TimeZone : "TimeZone",
}
const fnFieldNames = (
    Id = true,
    Name = true,
    Type = true,
  ) => {
    const result = [];
    if(Id){result.push(objFieldNames.Id)}
    if(Name){result.push(objFieldNames.Name)}
    if(Type){result.push(objFieldNames.Type)}
  
    return result;
}

const objTextCampaignFieldNames = {
    CounterIds : "CounterIds", 
    RelevantKeywords : "RelevantKeywords", 
    Settings : "Settings", 
    BiddingStrategy : "BiddingStrategy", 
    PriorityGoals : "PriorityGoals", 
    AttributionModel : "AttributionModel", 
    PackageBiddingStrategy : "PackageBiddingStrategy", 
    CanBeUsedAsPackageBiddingStrategySource : "CanBeUsedAsPackageBiddingStrategySource"
}

const fnTextCampaignFieldNames = (
    CounterIds = true,
    RelevantKeywords = true,
    Settings = true,
    BiddingStrategy = true,
    PriorityGoals = true,
    AttributionModel = true,
    PackageBiddingStrategy = true,
    CanBeUsedAsPackageBiddingStrategySource = true,
) => {
    const res = [];
    if(CounterIds){res.push(objTextCampaignFieldNames.CounterIds)}
    if(RelevantKeywords){res.push(objTextCampaignFieldNames.RelevantKeywords)}
    if(Settings){res.push(objTextCampaignFieldNames.Settings)}
    if(BiddingStrategy){res.push(objTextCampaignFieldNames.BiddingStrategy)}
    if(PriorityGoals){res.push(objTextCampaignFieldNames.PriorityGoals)}
    if(AttributionModel){res.push(objTextCampaignFieldNames.AttributionModel)}
    if(PackageBiddingStrategy){res.push(objTextCampaignFieldNames.PackageBiddingStrategy)}
    if(CanBeUsedAsPackageBiddingStrategySource){res.push(objTextCampaignFieldNames.CanBeUsedAsPackageBiddingStrategySource)}
    return res;
}
const objTextCampaignSearchStrategyPlacementTypesFieldNames = {
    SearchResults : "SearchResults",
    ProductGallery : "ProductGallery"
}

const fnTextCampaignSearchStrategyPlacementTypesFieldNames = (
    SearchResults = true,
    ProductGallery = true,
) => {
    const res = [];
    if(SearchResults){res.push(objTextCampaignSearchStrategyPlacementTypesFieldNames.SearchResults)}
    if(ProductGallery){res.push(objTextCampaignSearchStrategyPlacementTypesFieldNames.ProductGallery)}
    return res;
}


const createParams = (obj) => {
const res =  {
    "SelectionCriteria":fnSelectionCriteria(obj.typeCampaigns),
    "FieldNames":fnFieldNames(),
    }
    if(obj){
        if(obj.typeCampaigns === objTypeCampaigns.TEXT){
            res["TextCampaignFieldNames"] = fnTextCampaignFieldNames();
            res["TextCampaignSearchStrategyPlacementTypesFieldNames"] = fnTextCampaignSearchStrategyPlacementTypesFieldNames();
        }
    }


    return res;
}

export const fnGetAllCampaigns = (obj) => {
    return {
                "method":"get",
                "params":createParams(obj)
            }
}
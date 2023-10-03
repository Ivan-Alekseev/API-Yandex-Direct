export const yandexBase = {
    URLService:{
        campaigns:{//сервис кампании
            name:"campaigns",
            methods:{
                get:"get",
                add:"add",
                update:"update",
            }
        },
        reports:{
            name:"reports" //сервис отчеты
        }

    },
    METHOD:{
        get:{
            name:"get",
            WHAT:{
                campaigns:"campaigns"
            }
        },
        update:"update"
    }
}

const Yandex = (
    whatTodo="Получить",
    ) =>  {

    if("Получить"){
        return {
                    "method": "get",
                    "params":{

                    }
                }
    }
    if("Обновить"){
        return {
                    "method": "update",
                    "params":{
                    }
                }
    }
}


const getTextCampaigns = () => {


}


//example filter GET
// "SelectionCriteria": {
//     "CampaignIds": [1234567,1234589,1234777],
//     "Statuses": ["PREACCEPTED","ACCEPTED"]
//  }



// "SelectionCriteria":{
//     "Types": ["TEXT_CAMPAIGN"]
// }

CounterIds, RelevantKeywords, 
Settings, BiddingStrategy, 
PriorityGoals, TrackingParams, 
AttributionModel, PackageBiddingStrategy,
CanBeUsedAsPackageBiddingStrategySource

{
    "method":"add",
    "params":{
        "SelectionCriteria":{
            "Types": ["TEXT_CAMPAIGN"]
        },
    "FieldNames":["Id", "Name", "Type", "Currency", "DailyBudget", "Statistics", "Funds"],
    "TextCampaignFieldNames":["BiddingStrategy"]

    }
}


//---https://yandex.ru/dev/direct/doc/ref-v5/campaigns/get.html
export const getCampaignsDirect = ({
    filter={

    },

}) => {
    const result = {
        "method": "get",
        "params": { /* params */
          "SelectionCriteria": {}, /* required */
          "FieldNames": [( "BlockedIps" | ... | "Type" ), ... ], /* required */
          "TextCampaignFieldNames": [( "CounterIds" | "RelevantKeywords" | "Settings" | "BiddingStrategy" | "PriorityGoals" | "AttributionModel" | "PackageBiddingStrategy" | "CanBeUsedAsPackageBiddingStrategySource" ), ... ],
          "TextCampaignSearchStrategyPlacementTypesFieldNames" : [ ( "SearchResults" | "ProductGallery") ],
        }
      }
    
}


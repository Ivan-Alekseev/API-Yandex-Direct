const objCampaignParams = {
    Id:"Id",//long   /* required */
    Name:"Name", //string
    StartDate:"StartDate", //string
    DailyBudget:"DailyBudget",
}
const fnDailyBudget = (dailyBudget)=> {
    const res = {};
    res["Amount"] = dailyBudget.Amount;
    if(dailyBudget.Mode){res["Mode"] = dailyBudget.Mode}
    return res;
}

const fnCampaign = (campaign) => {
    console.log(`${objCampaignParams.Id} = ${campaign.Id}`);
    const res = {};

    res[`${objCampaignParams.Id}`] = `${campaign.Id}`;
    res[`${objCampaignParams.Name}`] = `${campaign.Name}`;
    

    
    // if(campaign.StartDate){res.objCampaignsParams.StartDate = campaign.StartDate}
    // if(campaign.DailyBudget){res.objCampaignsParams.DailyBudget = fnDailyBudget(campaign.dailyBudget)}
    console.log(res);

    return res;
}

const fnCampaigns = (campaigns) => {
    const res = [];
    for(let i = 0;i < campaigns.length;i++) {
        res.push(fnCampaign(campaigns[i]))
    }

    return res;
}
const createParams = (objParams) => {
    const res =  {
        "Campaigns": fnCampaigns(objParams.campaigns)
    }
    return res;
}
export const fnUpdateCampaign = (objParams) => {
    return {
                "method": "update",
                "params":createParams(objParams)
            }
}

// {  /* CampaignUpdateItem */
//  "DailyBudget": {  /* DailyBudget */
//           "Amount": (long), /* required */
//           "Mode": ( "STANDARD" | "DISTRIBUTED" ) /* required */
//         }, /* nillable */
//         "EndDate": (string), /* nillable */
//         "NegativeKeywords": {  /* ArrayOfString */
//           "Items": [(string), ... ] /* required */
//         }, /* nillable */
//         "BlockedIps": {  /* ArrayOfString */
//           "Items": [(string), ... ] /* required */
//         }, /* nillable */
//         "ExcludedSites": {  /* ArrayOfString */
//           "Items": [(string), ... ] /* required */
//         }, /* nillable */
//         "TextCampaign": {  /* TextCampaignUpdateItem */
//           ... text campaign params ...
//         },
//         "MobileAppCampaign": {  /* MobileAppCampaignUpdateItem */
//           ... mobile app campaign params ...
//         },
//         "DynamicTextCampaign": {  /* DynamicTextCampaignUpdateItem */
//           ... dynamic text campaign params ...
//         },
//         "CpmBannerCampaign": {  /* CpmBannerCampaignUpdateItem */
//           ... cpm banner campaign params ...
//         },
//         "SmartCampaign": {  /* SmartCampaignUpdateItem */
//           ... smart campaign params ...
//         },
//         "ClientInfo": (string),
//         "Notification": {  /* Notification */
//           "SmsSettings": {  /* SmsSettings */
//             "Events": [( "MONITORING" | ... | "FINISHED" ), ... ],
//             "TimeFrom": (string),
//             "TimeTo": (string)
//           },
//           "EmailSettings": {  /* EmailSettings */
//             "Email": (string),
//             "CheckPositionInterval": (int),
//             "WarningBalance": (int),
//             "SendAccountNews": ( "YES" | "NO" ),
//             "SendWarnings": ( "YES" | "NO" )
//           }
//         },
//         "TimeTargeting": {  /* TimeTargeting */
//           "Schedule": {  /* ArrayOfString */
//             "Items": [(string), ... ] /* required */
//           },
//           "ConsiderWorkingWeekends": ( "YES" | "NO" ), /* required */
//           "HolidaysSchedule": {  /* TimeTargetingOnPublicHolidays */
//             "SuspendOnHolidays": ( "YES" | "NO" ), /* required */
//             "BidPercent": (int),
//             "StartHour": (int),
//             "EndHour": (int)
//           }  /* nillable */
//         },
//         "TimeZone": (string)
//       }, ... ] /* required */
//     }
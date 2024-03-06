export const utilFunction=(result)=>{

    result?.data?.forEach((value) => {
        value.fillrate = ((value.requests * 100) / value.responses).toFixed(2) + "%";
        value.ctr = ((value.clicks * 100) / value.impressions).toFixed(2) + "%";
      })   

}
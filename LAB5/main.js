function load() {
    let column_1=[4,10,6,3,5,2,4,6,4,3,1,9,4,2,5,1,10,1,2,7,9,3,1,1,6,7,10,8,6];
    let column_2=[6,3,4,7,2,7,4,8,4,3,2,2,3,3,8,10,10,10,3,3,10,6,1,8,3,8,8,2,7];
    let column_3=[64,52,87,97,25,79,52,62,64,90,11,87,39,36,29,25,85,93,10,84,18,46,62,97,81,34,59,65,25];
    let column_4=[55,32,34,25,44,100,92,73,60,72,35,86,17,24,95,63,17,21,37,100,50,38,96,75,18,71,38,62,80];
    
    sum1=0;
    sum2=0;
    sum3=0;
    sum4=0;

    for (i=0;i<column_1.length; i++) {
        sum1=sum1+column_1[i];
    }
    for (i=0;i<column_2.length; i++) {
        sum2=sum2+column_2[i];
    }
    for (i=0;i<column_3.length; i++) {
        sum3=sum3+column_3[i];
    }
    for (i=0;i<column_4.length; i++) {
        sum4=sum4+column_4[i];
    }

    // let SumTotal=sum1+sum2+sum3+sum4;
    
    let SumTotalarr=[sum1, sum2, sum3, sum4];
    
    SumTotal=0;

    for (i=0;i<SumTotalarr.length; i++) {
    SumTotal=SumTotal+SumTotalarr[i];
    }
    
    const result={
        Sum: SumTotalarr,
        column_1: column_1,
        column_2: column_2,
        column_3: column_3,
        column_4: column_4,
        SumTotal: SumTotal
       }
        console.log (result)
}




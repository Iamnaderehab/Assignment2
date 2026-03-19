let findKthPositive = function(arr, k) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]>k+i){
            return k+i;
        }
       
    }
    
   return k+arr.length;

}
findKthPositive();
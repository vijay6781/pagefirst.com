#include <bits/stdc++.h>
//how many times come in particular number after addition.
#define ll  int
using namespace std;
ll x=0;
int sum(ll s[],ll n,ll k){
   
    if(k==0){
           return 0;
    }
    else if(n==0){
        return 1;
    }
   else if(s[n-1]>k){
         sum(s,n-1,k);
    }
    else if(s[n-1]<=k){
       if(sum(s,n-1,k-s[n-1])==0){
           x++;
       }
       sum(s,n-1,k);
    }
    return x;
    
}

int main() {
	ll t;
	cin>>t;
	while(t--){
	    ll n,k,p=0;
	    cin>>n;
	    ll s[n];
	    for(ll i=0;i<n;i++){
	        cin>>s[i];
	    }
	    cin>>k;
	    cout<<sum(s,n,k)<<endl;
	    x=0;
	}
	
}

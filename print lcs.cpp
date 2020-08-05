#include <bits/stdc++.h>
#define ll long long int
using namespace std;
ll dp[1000][1000];

int main() {
	ll t;
	cin>>t;
	while(t--){
	  string a,b;
	  cin>>a>>b;
	  ll m=a.size(),n=b.size();
	  for(ll i=0;i<m+1;i++){
	   for(ll j=0;j<n+1;j++){
	       if(i==0 || j==0){
	          dp[i][j]=0; 
	       }   
	      }
	  }
	  for(ll i=1;i<m+1;i++){
	    for(ll j=1;j<n+1;j++){
	        if(a[i-1]==b[j-1]){
	            dp[i][j]=1+dp[i-1][j-1];
	        }
	        else{
	            dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
	        }
	    }  
	  }
	  string s="";
	 ll i=m; ll j=n;
	 while(i>0 && j>0){
	 if(a[i-1]==b[j-1]){
	    s.push_back(a[i-1]);
	    i--;
	    j--;
	 }
	 else{
	     if(dp[i][j-1]>dp[i-1][j]){
	         j--;
	     }
	     else{
	         i--;
	     }
	     
	 }
	}
	
	reverse(s.begin(),s.end());
	cout<<s<<endl;
	return 0;
	}
}

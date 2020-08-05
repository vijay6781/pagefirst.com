#include <bits/stdc++.h>
//how many times come in particular number after addition.
#define ll  long long int
//ll dp[101][101];
using namespace std;

int main() {
	ll t,m,n;
	  string a,b;
	cin>>t;
	while(t--){
	    //memset(t1,-1,sizeof(t1));
	    //memset(dp,-1,sizeof(dp));
	    cin>>m>>n;
	    cin>>a>>b;
	    //ll m=a.size(),n=b.size();
	    ll dp1[m+1][n+1];
	    for(ll i=0;i<m+1;i++){
	        for(ll j=0;j<n+1;j++){
	            if(i==0 || j==0){
	                dp1[i][j]=0;
	            }
	        }
	    }
	    for(ll i=1;i<m+1;i++){
	        for(ll j=1;j<n+1;j++){
	             if(a[i-1]==b[j-1]){
	               dp1[i][j]=1+dp1[i-1][j-1];
	            }
	            else{
	                dp1[i][j]=max(dp1[i-1][j],dp1[i][j-1]);
	            }
	        }
	    }
	    cout<<dp1[m][n]<<endl;
	    
	}
	
}

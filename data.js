const data = [
  {
    id: 1,
    enunt: "Subprogramul produs are doi parametri, a și b, prin care primește câte un număr natural din intervalul [1, 10^3]. Subprogramul returnează produsul divizorilor naturali comuni lui a și b.",
    exemplu: "Exemplu: dacă a=20 și b=12, atunci subprogramul returnează valoarea 8 (1 * 2 * 4 = 8).",
    program: `#include <iostream.h>
#include <conio.h>

int produs(int a, int b){
    int i,nrMaiMic,produs=1;
    if(a<b)
        nrMaiMic=a;
    else
        nrMaiMic=b;
    
    for(i=1;i<=nrMaiMic;i++){
        if(a%i==0 && b%i==0)
            produs*=i;
    }
    
    return produs;
}

void main(){
    int a,b;
    cin>>a>>b;
    cout<<produs(a,b);
    getch();
}`
  },
  {
    id: 2,
    enunt: "Subprogramul sub are trei parametri:n (2<n<50), v (tablou cu n numere naturale de max 4 cifre) și k (1<k<=n). Returnează suma primelor k elemente impare din tablou sau -1 dacă nu există k elemente impare.",
    exemplu: "Exemplu: n=8, v=(2, 7, 6, 8, 3, 7, 5, 1), k=3 → returnează 17 (7+3+7).",
    program: `#include <iostream.h>
#include <conio.h>

int sub(int n, int v[100], int k){
    int i, suma=0;
    
    for(i=1;i<=n;i++){
        if(k==0)
            break;
        if(v[i]%2!=0){
            suma += v[i];
            k--;
        }
    }
    
    if(k > 0)
        return -1;
    return suma;
}

void main(){
    int i, n, v[100], k;
    cin>>n>>k;
    for(i=1;i<=n;i++){
        cin>>v[i];
    }
    cout<<sub(n,v,k);
    getch();
}`
  },
  {
    id: 3,
    enunt: "Subprogramul valuri construiește un tablou v cu 2*n elemente astfel încât elementele impare să fie strict crescătoare, iar cele pare strict descrescătoare, alternând paritățile (primul element e impar).",
    exemplu: "Exemplu: n=4 → v=(1, 8, 3, 6, 5, 4, 7, 2).",
    program: `#include <iostream.h>
#include <conio.h>

void valuri(int n, int v[100]){
    int i;
    for(i=1;i<=n*2;i++){
        if(i%2!=0)
            v[i]=i;
        else
            v[i]=n*2-i+2;
    }
}

void main(){
    int i,n,v[100];
    cin>>n;
    valuri(n,v);
    for(i=1;i<=n*2;i++)
        cout<<v[i]<<" ";
    getch();
}`
  },
  {
    id: 4,
    enunt: "Subprogramul num înlocuiește cu 0 fiecare valoare mai mică sau egală cu prima valoare din tabloul v cu n elemente.",
    exemplu: "Exemplu: n=7, v=(4, 5, 0, 9, 3, 4, -2) → v=(0, 5, 0, 9, 0, 0, 0).",
    program: `#include <iostream.h>
#include <conio.h>

void num(int n, int v[100]){
    int i, primul = v[1];
    for(i=1;i<=n;i++)
        if(v[i] <= primul)
            v[i]=0;
}

void main(){
    int i,n,v[100];
    cin>>n;
    for(i=1;i<=n;i++)
        cin>>v[i];
    num(n,v);
    for(i=1;i<=n;i++)
        cout<<v[i]<<" ";
    getch();
}`
  },
  {
    id: 5,
    enunt: "Subprogramul triplete afișează toate tripletele de numere naturale (x, y, z) cu proprietatea x < y < z și x*y + y*z = n.",
    exemplu: "Exemplu: n=8 → se afișează (0,1,8), (0,2,4), (1,2,3).",
    program: `#include <iostream.h>
#include <conio.h>

void triplete(int n){
    int i,j,k;
    for(k=0; k<n; k++){
        for(j=k+1; j<n; j++){
            for(i=j+1; i<=n; i++){
                if(k*j + j*i == n)
                    cout<<"("<<k<<","<<j<<","<<i<<")"<<endl;
            }
        }
    }
}

void main(){
    int n;
    cin>>n;
    triplete(n);
    getch();
}`
  },
  {
    id: 6,
    enunt: "Un număr este perfect dacă este egal cu suma divizorilor săi mai mici decât el. Subprogramul afișează în ordine descrescătoare numerele perfecte din intervalul [a, b].",
    exemplu: "Exemplu: a=5, b=30 → se afișează 28 6.",
    program: `#include <iostream.h>
#include <conio.h>

void perfect(int a, int b){
    int i,s,j, gasit=0;
    for(i=b; i>=a; i--){
        s=0;
        for(j=1; j<=i/2; j++){
            if(i%j==0)
                s += j;
        }
        if(s==i && i != 0){
            cout<<i<<" ";
            gasit = 1;
        }
    }
    if(!gasit) cout<<"nu exista";
}

void main(){
    int a,b;
    cin>>a>>b;
    perfect(a,b);
    getch();
}`
  },
  {
    id: 7,
    enunt: "Subprogramul NrPrime returnează numărul de cifre prime ale unui număr natural n (cifrele prime sunt 2, 3, 5, 7).",
    exemplu: "Exemplu: n=1233405 → returnează valoarea 4 (cifrele 2, 3, 3, 5).",
    program: `#include <iostream.h>
#include <conio.h>

int nrPrime(int n){
    int s=0, c;
    if(n == 0) return 0;
    while(n!=0){
        c = n % 10;
        if(c==2 || c==3 || c==5 || c==7)
            s++;
        n/=10;
    }
    return s;
}

void main(){
    int n;
    cin>>n;
    cout<<nrPrime(n);
    getch();
}`
  },
  {
    id: 8,
    enunt: "Un număr este subperfect dacă este strict mai mic decât suma divizorilor săi proprii (divizori diferiți de 1 și el însuși). Afișați descrescător numerele subperfecte din [a, b].",
    exemplu: "Exemplu: a=10, b=20 → 20 18 12.",
    program: `#include <iostream.h>
#include <conio.h>

void subperfect(int a,int b){
    int s,i,j, gasit=0;
    for(i=b; i>=a; i--){
        s=0;
        for(j=2; j<=i/2; j++){
            if(i%j==0)
                s += j;
        }
        if(s>i){
            cout<<i<<" ";
            gasit = 1;
        }
    }
    if(!gasit) cout<<"nu exista";
}

void main(){
    int a,b;
    cin>>a>>b;
    subperfect(a,b);
    getch();
}`
  }
]

export default data;
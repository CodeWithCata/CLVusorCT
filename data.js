const data = [
  {
    id: 1,
    enunt: "Se citesc două numere naturale a și b. Calculați și afișați produsul divizorilor comuni ai celor două numere.",
    exemplu: "Exemplu: pentru a=12, b=18 → divizorii comuni: 2 și 3 → produsul = 6",
    program: `#include <iostream.h>
#include <conio.h>

int produs(int a, int b){
    int i,nrMaiMic,produs=1;
    if(a<b)
        nrMaiMic=a;
    else
        nrMaiMic=b;
    
    for(i=2;i<=nrMaiMic;i++){
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
    enunt: "Se citesc n numere naturale și un număr k. Calculați suma primelor k elemente impare din vector. Dacă nu există suficiente elemente impare, se iau doar cele disponibile.",
    exemplu: "Exemplu: pentru n=5, k=3, vectorul 1 2 3 4 5 → suma primelor 3 elemente impare = 1+3+5 = 9",
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
    
    if(suma == 0)
        return -1;
    return suma;
}

void main(){
    int i, n, v[100], k;
    cin>>n>>k;
    for(i=1;i<=n;i++){
        cout<<"Introdu elementul "<<i<<":";
        cin>>v[i];
    }
    cout<<sub(n,v,k);
    getch();
}`
  },
  {
    id: 3,
    enunt: "Se citește un număr n. Completați un vector de dimensiune 2n cu valori în formă de valuri: pozițiile impare = index, pozițiile pare = 2n - index + 2.",
    exemplu: "Exemplu: pentru n=3 → vectorul va fi: 1 6 3 4 5 2",
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
    enunt: "Se citesc n numere naturale într-un vector. Dacă primul element este mai mare sau egal cu următoarele elemente, înlocuiți valorile mai mici sau egale cu 0.",
    exemplu: "Exemplu: pentru n=5, vectorul 10 5 15 8 12 → rezultatul va fi: 10 0 15 0 12",
    program: `#include <iostream.h>
#include <conio.h>

void num(int n, int v[100]){
    int i;
    for(i=2;i<=n;i++)
        if(v[1]>=v[i])
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
    enunt: "Se citește un număr n. Găsiți toate tripletele de numere întregi (k,j,i) cu 0 ≤ k < j < i ≤ n care satisfac ecuația k*j + j*i = n.",
    exemplu: "Exemplu: pentru n=6 → un triplet posibil: (0,1,2) deoarece 0*1 + 1*2 = 2 ≠ 6 (toate combinațiile trebuie verificate).",
    program: `#include <iostream.h>
#include <conio.h>

void triplete(int n){
    int i,j,k;
    for(i=n;i>=1;i--){
        for(j=i-1;j>=1;j--){
            for(k=j-1;k>=0;k--){
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
    enunt: "Se citesc două numere a și b. Afișați toate numerele perfecte din intervalul [a,b].",
    exemplu: "Exemplu: pentru a=1, b=30 → numere perfecte: 6, 28",
    program: `#include <iostream.h>
#include <conio.h>

void perfect(int a, int b){
    int i,s,j;
    for(i=a;i<=b;i++){
        s=0;
        for(j=1;j<i;j++){
            if(i%j==0)
                s += j;
        }
        if(s==i)
            cout<<i<<" ";
    }
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
    enunt: "Se citește un număr n. Determinați câte cifre impare are n.",
    exemplu: "Exemplu: pentru n=12345 → cifrele impare: 1,3,5 → rezultat = 3",
    program: `#include <iostream.h>
#include <conio.h>

int nrPrime(int n){
    int s=0;
    while(n!=0){
        if(n%10%2!=0)
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
    enunt: "Se citesc două numere a și b. Afișați toate numerele subperfecte din intervalul [a,b], adică numerele a căror sumă a divizorilor proprii (mai mici decât numărul) este mai mare decât numărul.",
    exemplu: "Exemplu: pentru a=12, b=20 → numere subperfecte = 12,18,20",
    program: `#include <iostream.h>
#include <conio.h>

void subperfect(int a,int b){
    int s,i,j;
    for(i=a;i<=b;i++){
        s=0;
        for(j=2;j<i;j++){
            if(i%j==0)
                s += j;
        }
        if(s>i)
            cout<<i<<" ";
    }
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
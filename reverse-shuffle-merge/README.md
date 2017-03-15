# Reverse Shuffle Merge 

src: https://www.hackerrank.com/challenges/reverse-shuffle-merge


## Problem

주어진 스트링 S에 대해 함수의 정의는 다음과 같다

a. reverse(S) : 스트링 S를 역정렬 하여 얻은 결과; 예) reverse('abc') = 'cba'  
b. shuffle(S) : 스트링 S를 랜덤하게 섞은 결과; 예) shuffle('god') ∈ ['god', 'gdo', 'ogd', 'odg', 'dgo', 'dog']  
c. merge(S1, S2) : 두개의 스트링 S1, S2의 순서를 유지한 채 둘의 엘리먼트를 섞었은 결과;  
  - S1 = 'abc'이고 S2 = 'def'일 때  
  - merge(S1, S2)의 해는 'abcdef', 'abdecf', 'adbecf'...기타등등 이 될 수 있음  
  - merge(S1, S2) ∈ ['abcdef', 'abdecf', 'adbecf', ...]  
  

S ∈ merge(reverse(A), shuffle(A))의 관계를 가지는 스트링 S가 주어질 때, 


### 입력
한줄로 들어오는(single line) 스트링 S
 
### 출력
사전에서 가장 앞에 나오는, 유효한 의미를 가진 스트링 A

### 제약
- S는 알파벳 소문자만 들어옴
- S.length <= 100000

### 입력 예제
```
eggegg
```

### 출력 예제
```
egg
```

### 해설
```
reverse('egg') = 'gge'
shuffle('egg') 는 'egg'가 될 수 있음
'eggegg' ∈ merge('gge', 'egg')
```
각각 요소를 분해해보면: e(*gge*)gg로 머지됨

egg는 사전에서 가장 먼저나오는 캐릭터

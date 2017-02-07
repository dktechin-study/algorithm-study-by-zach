# 세포의 자가증식 프로젝트


## 입출력
1. 입력

- 입력파일: input.txt
- 파일 첫번째 행: T개의 테스트 케이스
- 각 테스트의 첫 번째 행: N (DNA 개수)
- 각 테스트의 두 번째 행: DNA패턴

2. 출력
- 출력파일: output.txt
- 세포가 자가 증식하 과정 모두 출력
- 몇회 분할했는지 'X회 분할'이라고 출력
- 의미 없는 값은 음수로 변환

3. 입출력 예
- 입력  

```txt
2
5
1 3 0 3 0
5
1 2 3 4 5
```

- 출력  
```txt
1 0 2 0 1
0 1 0 1 0
0 0 1 0 0
-1 1 1 0 -1
====================
3회 분할

3 -2 -1 5 5
====================
-1회 분할
```
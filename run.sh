#! /bin/bash
: <<"END"
 * chmod +x script.sh or chmod 755 script.sh
 * zsh script.sh
 * run >> ./run.sh first second 3rd
 * 변수는 대소문자를 구별함
 * 변수는 숫자로 시작할 수 없다
 * 변수는 모든 값을 문자열로 저장함
 * 변수는 자료형을 기입하지 않는다
 * 변수를 사용할 때는 특수문자 `$` 를 사용함
 * 값을 대입할 때는 특수문자를 사용하지 않는다
 * 변수를 생성 및 값을 할당할 때 는 양쪽공백없이 `=` 연산자를 사용함
 * echo : 개행문자를 포함하여 출력
 * printf : 개행문자를 포함하지 않고 출력
 * 예약변수
    - HOME, PATH, LANG, UID, SHELL, USER, FUNCNAME, TERM
 * 변수명령
    - set, env, export, unset
 * escape
    - \f, \n, \r, \t
 * 산술연산
    - expr
    - let
    - $(())

 * 비교연산
    `-z 문자` # 문자가 널이면 참
    `-n 문자` # 문자가 널이 아니면 참
END

# 특수문자
# * ? [ ' " ` \ $ ; & ( ) | ~ < > # % = 스페이트 탭 개행

echo "\$0 ( 스크립트 명 ) : $0"
echo "\$1 ( 1번째 인수 ) : $1"
echo "\$2 ( 2번째 인수 ) : $2"
echo "\$3 ( 3번째 인수 ) : $3"
echo "\$# ( 총 인수의 수 ) : $#"
echo "\$* ( 모든 인수를 모아 하나로 처리 ) $*"
echo "\$@ ( 모든 인수를 각각 처리 ) : $@"
echo "\$\$ ( 이 쉘 스크립트의 프로세스 ID ) : $$"
echo "\$\! ( 마지막으로 실행한 백그라운드 프로세스 ID ) : $!"
var="개행\n문자"
printf "$var\n\n"

# tr "\n" "\t"

echo -e $var

# expr
echo "10 + 20 = $(expr 10 + 20)"
echo "20 - 10 = $(expr 20 - 10)"  # => 10
echo "11 ^ 11 = $(expr 11 \* 11)" # 제곱
echo "12 / 5 = $(expr 12 / 5)"    # 나눗셈 : 2
echo "10 % 2 = $(expr 10 % 4)"    # 나머지 : 2

a=123
b=456

if [ $a != $b ]; then
    echo "true"
else
    echo "false"
fi

if [ $a -eq $b ]; then
    echo "$a, $b -> equal"
else
    echo "$a, $b -> not equal"
fi
##########################
echo
echo
# 공인아이피
ip="ifconfig.me && echo"
printf "$(curl - $ip)"

# switch
c=3
case $c in
1) echo "1 입니다." ;;
2) echo "2 입니다." ;;
3) echo "정답니다." ;;
esac

# while loop
printf "While Loop\n\n"
d=0
while [ $d -lt 5 ]; do
    echo $d
    d=$(expr $d + 1)

done
printf "\nuntile loop\n"

e=0
until [ $e -gt 5 ]; do
    echo $e
    e=$(expr $e + 1)

done

printf "\nfor loop\n"
for var in {0..5}; do
    echo $var
done

printf "\nfunction\n"
VivFunction() {
    local str="Hello Local World"
    echo "함수에서의 echo"
    printf "인수: $1 + 인수2: $2 = $(expr $1 + $2)\n\n"
    echo $str
    echo ${str}
}

VivFunction 345 567

echo $(which zsh)

message="Good Nice Fine"

printf "%s\n" ${message}
echo "Hello, World.${message}"

# -r 읽기 전용, 상수 타입
declare -r r1="nice"
readonly r2="hi"

echo
echo "Read Only r1 = $r1"
echo

# -i 정수타입
declare -i number
number=1234
echo "number = $number"

# -a : 배열타입
# -A : 연관배열 타입
# -f : 함수 타입
# -x : 환경변수 타입

num1=150
num2=20

plus=$(expr $num1 + $num2)
plus="$num1 + $num2 = $(expr $num1 + $num2)"
mul=$(expr $num1 \* $num2)
echo $plus
echo $mul
echo "let"

let rs=num1+num2
echo $rs

let rs=num1*num2
echo $rs
echo "(4 + 7) * 2 = $(expr \( 4 + 7 \) \* 2)"

let rs=num1/num2
echo $rs

let rs=num1%num2
echo $rs

clear
echo $((num1 + num2))
echo $((num1 * num2))
echo $((num1 / num2))
echo $((num1 % num2))
echo
if ((${num1} < ${num2})); then
    echo "YES"
else
    echo "NO"
fi

str2="Hello World"

if [ -z $str2 ]; then
    echo "Is Null"
else
    echo "Is Not Null $str2"
fi
echo $str2

for x in 1 2 3 4 5; do
    echo "$x"
done

foo="456"
arr2=(4 5 6 7 8)
# 변수에 중괄호는
# 1. 변수와 문자를 연결할 때
# 2. 배열요소
# 3. 9 이상의 매개 변수
# 4. 기타 모호한 곳
echo "${foo}bar"
echo "${arr2[3]}"

var5=10
echo ${var5}
echo ${var5}bar

dir=$(ls .)
echo "${dir}"
echo ----
fname="README.md"
for x in ${dir}; do
    if [ -d $x ]; then
        echo "$x -> Directory"
    fi

    # echo $x
done

##########################
unset a
unset b
unset c
unset d
unset rs
unset num1
unset num2
echo
echo
if [ $? -eq 0 ]; then
    echo -e "success\n\n"
elif [ $? -eq 1 ]; then
    echo "fail\n\n"
else
    echo "nothing\n\n"
fi

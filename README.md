# 경도인지장애 가정 케어 서비스, 두뇌비타민 가디언

## 웹과 다른 점
- `pages -> screens` / `router -> navigation`
    - 스크린 구조 설계가 필요하다.
- 폰트 사이즈 변경 어떻게?
    - 웹에서처럼 폰트 사이즈 rem 등의 상대 단위로 작성해서 루트 폰트 사이즈만 변경하면 될 듯, but RN에선 그걸 못함
    - 일일이 fontSize 변수 불러와서 작성
    - fontSize 변수 작성하는 횟수를 줄이고자, 가장 자주 사용되는 폰트 사이즈(본문)를 모든 텍스트에 default 폰트 사이즈로 설정
    - -> Text 컴포넌트 대신 CustomText 컴포넌트 사용
- 회원가입 할 때 Progress step
    - 한 스크린 내에서 스텝별 컴포넌트를 보였다가 숨기는 식으로 구성할지, 스텝별 스크린을 여러 개 만들어 놓고 스택 쌓는 구조로 구성할지?
    - -> 후자로 만들었음
 
## 상태 관리
- 이름 name
- 별명 nickname
- 전화번호 phoneNumber
- 가족 Id familyId
- 가족 이름(환자 이름) familyName
- 폰트 사이즈 fontSize
- 프로필 이미지 profileImgUrl
- accessToken

## 스크린 구조
Stack.Navigator
- 스플래시 Splash (Screen)
- Auth (Stack.Navigator)
    - 로그인 LogIn (Screen)
    - SignUpScreen (Stack.Navigator)
        - 회원가입 절차 SignUpStep (Stack.Navigator)
            - 글자 크기 설정 FontSizeSet (Screen)
            - 전화번호 인증 PhoneNumberSet (Screen)
            - 생년월일/성별 입력 BirthDateSet (Screen)
            - 이름/별명 입력 NameSet (Screen)
        - FamilyGroupScreen (Stack.Navigator)
            - 가족그룹 FamilyGroup (Screen)
            - 가족그룹 추가 FamilyGroupAdd (Stack.Navigator)
                - 가족 고유번호 입력 FamilyKey (Screen)
                - 환자와의 관계 입력 Relationship (Screen)
            - 가족그룹 수정 FamilyGroupEdit (Screen)
- Main (Tap.Navigator)
    - FamilyScreen (Stack.Navigator)
        - 가족 Family (Screen)
        - 글 상세보기 FamilyPostRead (Screen)
        - 글 수정하기 FamilyPostEdit (Screen)
        - 글쓰기 FamilyPostWrite (Screen)
    - NeighborScreen (Stack.Navigator)
        - 이웃 Neighbor (Screen)
        - 글 상세보기 NeighborPostRead (Screen)
        - 글 수정하기 NeighborPostEdit (Screen)
        - 글쓰기 NeighborPostWrite (Screen)
    - HomeScreen (Stack.Navigator)
        - 홈 Home (Screen)
        - FamilyGroupScreen (Stack.Navigator)
    - PatientScreen (Stack.Navigator)
        - 환자 Patient (Screen)
        - 활동 내역 PatientActivity (Screen)
        - 영역별 능력 보기 PatientAnalyze (Screen)
        - FamilyGroupScreen (Stack.Navigator)
    - MyPageScreen (Stack.Navigator)
        - 마이페이지 MyPage (Screen)
        - 내가 올린/댓글 단/표정 지은 게시글 MyActivityPost (Screen)
        - VitaminScreen (Stack.Navigator)
            - 비타민 목록 Vitamin (Screen)
            - 비타민 안 만든 사진 목록 Album (Screen)
        - SettingScreen (Stack.Navigator)
            - Setting (Screen)
            - 회원정보 수정 ProfileEdit (Screen)
            - 글자크기 설정 FontSizeEdit (Screen)
            - 고객센터
            - 로그아웃
            - 회원탈퇴

레이어 팝업
- 신고하기 Report
- 비타민 만들기 VitaminWrite
- 비타민 수정하기 VitaminEdit

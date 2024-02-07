


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


const navigation = getNode('.navigation');
// const list = getNodes('.navigation li');
const visualImage = getNode('.visual img');


function handleSlide(e){
  e. preventDefault();

  const target = e.target.closest('li');
  const a = e.target.closest('a');

  const list = [...navigation.children]

  if(!target | !a) return;

  const index = target.dataset.index;

  // visualImage.setAttribute('src',a.href); 또는
  // visualImage.src = a.href; 또는
  attr(visualImage,'src',`./assets/part01/${data[index-1].src}`);
  attr(visualImage,'alt',data[index-1].alt)

  // 이미지를 바꿀 땐 꼭 alt도 교체해줘야 한다.
  // -> 1. 선택한 li의 n번째를 찾아서 data 배열의 i번째에 접근
  // console.log(data[index-1].alt);
  //    2. img alt = ???

  // li를 클릭할 때 visual의 image를 교체
  // target visual img.src 변경 -> visual의 img를 잡아야 함

  list.forEach(li => removeClass(li, 'is-active'));

  // console.log(data[index-1].src);


  addClass(target,'is-active');

}

  // 순서 생각하기

  // 1. e.target 조회
  // console.log(e.target);


  // 2. li만 수집 (closest)
  // console.log(e.target.closest('li'));

  // console.log(navigation.children); 얘를 배열로
  

  // 3. 내가 선택한 li에게 is-active 클래스를 넣어주세요
  // 나를 제외한 모든 li에게 is-active class remove
  // -> 모든 li에게 is-active class remove
  // addClass(target,'is-active');



navigation.addEventListener('click',handleSlide);


















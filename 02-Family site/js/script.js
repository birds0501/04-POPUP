$(function () {
  //대상을 변수에 저장
  const $selectMenu = $(".select-menu");

  //셀렉트 박스를 클릭하면 --> option의 선택을 바뀌면
  //change이벤트 : input, textarea, select 등 요소의 value에 변화가 일어날 때
  $selectMenu.on("change", function () {
    //클릭한 option의 value값을 가져와서 : val()메서드 사용
    const linkValue = $(this).val();
    console.log(linkValue);
    //브라우저의 주소창에 적용시킨다. --> 페이지 이동 : location.href
    // location.href = linkValue;(창 이동)

    //새 창 열기 --> window.open()
    window.open(linkValue);
  });

  //2.디자인 커스텀
  const $selectWrap = $(".select-wrap");
  const $selectList = $(".select-list");

  //strong(Family site를 클릭하면 $selectList를 보이게)
  $selectWrap.find("strong").on("click", function () {
    $selectList.slideToggle();
  });

  $selectList.children("li").on("click", function () {
    //attr('속성명')
    // const linkValue = $(this).attr("data-link"); //변수 유효 범위가 중괄호 안이기 때문에(지역변수) const 반복하여 쓸 수 있다.

    //data('속성명')
    const linkValue = $(this).data("link");
    console.log(linkValue);

    window.open(linkValue);

    $selectList.slideUp();
  });
});

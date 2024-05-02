<!--220704 start-->
<div
  class="layer__body popup report"
  id="report"
  aria-hidden="true"
  role="dialog"
>
  <div class="layer__wrap layer__wrap--wide">
    <div class="layer__close">
      <button class="close"><span>close</span></button>
    </div>
    <div class="layer__inner">
      <div class="layer__head">
        <p class="content__title">PlayD 트렌드 리포트 다운로드</p>
        <p class="content__description">
          간단한 정보를 입력하시면 플레이디 리포트를 빠르게<br />
          받아보실 수 있습니다.
        </p>
      </div>
      <div class="layer__content">
        <div class="content__text">
          <form>
            <legend>플레이디 트렌드 리포트 다운로드 신청폼</legend>
            <div class="form-field">
              <label
                for="user-name"
                class="input-box-info__label input-box-info__label--necessary"
                >이름</label
              >
              <input
                type="text"
                id="user-name"
                class="input-box-info__input"
                name=""
                placeholder="이름을 입력해 주세요."
                maxlength="52"
              /><!--220704-->
              <p class="form-warning">이름을 입력해주세요.</p>
            </div>
            <div class="form-field">
              <label
                for="user-mail"
                class="input-box-info__label input-box-info__label--necessary"
                >이메일 주소</label
              >
              <input
                type="text"
                id="user-mail"
                class="input-box-info__input"
                name=""
                placeholder="이메일 주소를 입력해 주세요."
                maxlength="320"
              /><!--220704-->
              <p class="form-warning">이메일 주소를 입력해 주세요.</p>
            </div>
            <div class="form-field">
              <label
                for="user-company"
                class="input-box-info__label input-box-info__label--necessary"
                >회사명(소속)</label
              >
              <input
                type="text"
                id="user-company"
                class="input-box-info__input"
                name=""
                placeholder="회사명을 입력해 주세요."
                maxlength="52"
              /><!--220704-->
            </div>
            <div class="form-field">
              <label for="user-position" class="input-box-info__label"
                >직업</label
              >
              <input
                type="text"
                id="user-position"
                class="input-box-info__input"
                name=""
                placeholder="직업을 입력해 주세요."
                maxlength="52"
              /><!--220704-->
              <p class="form-warning">직업을 입력해 주세요.</p>
            </div>
            <div class="form-field">
              <label for="user-position" class="input-box-info__label"
                >직급</label
              >
              <input
                type="text"
                id="user-position"
                class="input-box-info__input"
                name=""
                placeholder="직급을 입력해 주세요."
                maxlength="52"
              /><!--220704-->
            </div>
            <div class="form-field">
              <label for="user-team" class="input-box-info__label"
                >부서(팀명)</label
              >
              <input
                type="text"
                id="user-team"
                class="input-box-info__input"
                name=""
                placeholder="부서를 입력해 주세요."
                maxlength="52"
              /><!--220704-->
            </div>
            <div class="sub-checkboxs">
              <label for="sub-checkbox--personal" class="sub-checkbox__label">
                <input
                  type="checkbox"
                  id="sub-checkbox--personal"
                  name=""
                  class="sub-checkbox__input"
                />
                <span>[필수] 개인 정보 수집 및 이용에 동의합니다</span>
              </label>
              <a href="#" target="_blank" class="open__personal">전문 보기</a><!-- 2024.05.02 -->
            </div>
            <p class="form-description"></p>
            <div class="sub-checkboxs">
              <label for="sub-checkbox--marketing" class="sub-checkbox__label">
                <input
                  type="checkbox"
                  id="sub-checkbox--marketing"
                  name=""
                  class="sub-checkbox__input"
                />
                <span>[선택] 광고성 정보 수집에 동의합니다.</span>
              </label>
                <a href="#" target="_blank" class="open__marketing">전문 보기</a><!-- 2024.05.02 -->
            </div>
          </form>
        </div>
        <button type="submit" class="button layer__button form-submit--wide">
          리포트 다운로드
        </button>
      </div>
    </div>
  </div>
</div>
<!--220704 end-->

<!--220629 수정 start-->
<div class="top-button">
  <a href="/"><span class="a11y">위로가기</span></a>
</div>
<!--220629 수정 end-->

<!--220627 수정 start-->

<footer class="footer">
  <section class="footer__banner banner">
    <div class="banner__content">
      <p class="banner__title font--md">
        플레이디와 함께 멈추지 않는 성장을 경험하세요.
      </p>
      <div class="button__wrap">
        <a href="#" class="button__square button__lined-white font--bd"
          >프로젝트 문의</a
        >
        <a
          href="../assets/files/PLAYD_Company_Brief.pdf"
          class="button__square button__filled-white font--bd"
          download
          >회사 소개서 다운로드</a
        ><!--220701수정-->
      </div>
    </div>
  </section>
  <div class="footer-top">
    <div class="footer-top__inner">
      <p class="logo logo__footer">
        <a href="#">
          <img
            src="../assets/images/m/common/logo_color.png"
            alt="플레이디 로고"
          />
        </a>
      </p>
      <div class="footer__nav">
        <div class="footer__wrap footer__wrap--line">
          <p><a href="#">윤리위반신고</a></p>
          <!--220726 -->
          <p><a href="#">뉴스레터</a></p>
          <p><a href="#">오시는 길</a></p>
          <p class="footer__line--last">
            <a href="https://sensen.techhub.co.kr/apply/diagnosis"
              >무료 광고 진단</a
            >
          </p>
          <!--220718 수정-->
        </div>
        <!--220629 수정-->
        <div class="footer__wrap--line">
          <p class="footer__line--last">
            <a href="./personal.html" class="font--bd">개인정보처리 방침</a>
          </p>
        </div>
      </div>
      <!--220629 수정-->
      <nav class="footer__nav--right">
        <a href="#" class=""
          ><img src="../assets/images/m/common/logo_naver.png" /><span
            class="a11y"
            >네이버</span
          ></a
        >
        <a href="#" class=""
          ><img src="../assets/images/m/common/logo_instagram.png" /><span
            class="a11y"
            >인스타그램</span
          ></a
        >
        <a href="https://pletter.stibee.com/" target="_blank" class="platter"
          ><img src="../assets/images/m/common/logo_platter.png" /><span
            class="a11y"
            >플레터</span
          ></a
        ><!-- 20240126 -->
      </nav>
    </div>
  </div>
  <!--220718 수정-->
  <div class="footer-bottom">
    <ul class="footer__util">
      <li>(주)플레이디</li>
      <li>대표자 : 이준용 | 사업자등록번호 : 129-86-43885</li>
      <li>주소 : 경기도 성남시 분당구 황새울로 359번길 11, 5~6층</li>
      <!--220726 -->
      <li>이메일 : <a href="mailto:master@playd.com">master@playd.com</a></li>
      <li class="copyright">
        Copyright &copy; PlayD.,Ltd, All rights reserved.
      </li>
    </ul>
    <p class="information">
      <!--220812 s-->
      <span class="information__title">대표전화</span>
      <span class="footer__number numbering">1566-3265</span>
      <span class="footer__info">평일 10:00~17:00</span>
    </p>
    <!--220812 e-->
  </div>
  <!--220718 수정-->
</footer>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="@@webroot/assets/js/m/countUp.js"></script>
<script src="@@webroot/assets/js/m/swiper.min.js"></script>
<script src="@@webroot/assets/js/m/ui.js"></script>

<script src="@@webroot/assets/js/jquery-1.12.4.min.js"></script>
<script src="@@webroot/assets/js/jquery-ui-1.13.1.js"></script>
<script src="@@webroot/assets/js/datepicker.js"></script>

<!--220627 수정 end-->

<!-- Footer Logscript  Start -------------------------------------------------------------------------------------------------------->	
<!--------- 삭제 금지 : PlayD TERA Log Script v1.2 -->
<script>
var _nSA=(function(_g,_s,_p,_d,_i,_h){ 
 if(_i.wgc!=_g){_i.wgc=_g;_i.wrd=(new Date().getTime());
 var _sc=_d.createElement('script');_sc.src=_p+'//sas.techhub.co.kr/'+_s+'gc='+_g+'&rd='+_i.wrd;
 var _sm=_d.getElementsByTagName('script')[0];_sm.parentNode.insertBefore(_sc, _sm);} return _i;
})('TR9947105674','sa-w.js?',location.protocol,document,window._nSA||{},location.hostname);
</script>
<!--------- 삭제 금지 : PlayD TERA Log Script v1.2 -->
<!-- 채널톡 -->
<script>
  (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

  ChannelIO('boot', {
    "pluginKey": "3c1abb65-3b7e-4562-a85e-6ca7f57d0c15"
  });
</script>
<!-- Footer Logscript  END -------------------------------------------------------------------------------------------------------->

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
              <a href="./personal.html" target="_blank">전문 보기</a>
            </div>
            <p class="form-description">
              입력하신 이름, 직업, 이메일 주소, 직급, 회사명 (소속),
              부서(팀명)은 뉴스레터 발송을 위해 정보주체로부터 개인정보를 수집
              시에 동의 받은 개인정보 보유, 이용 기간 동안 보관 및 이용됩니다.
            </p>
            <div class="sub-checkboxs">
              <label for="sub-checkbox--marketing" class="sub-checkbox__label">
                <input
                  type="checkbox"
                  id="sub-checkbox--marketing"
                  name=""
                  class="sub-checkbox__input"
                />
                <span>[선택] 마케팅 정보 수집 및 이용에 동의<br />합니다</span>
              </label>
              <a href="javascript:doDisplay();" class="sub-checkbox_btn"
                ><span class="a11y">열고닫기</span></a
              >
            </div>
            <p id="marketing-frm" class="form-description __last open">
              마케팅 및 광고에 활용, 서비스 또는 컨텐츠 정보의 제공, 무료 컨설팅
              메일 발송을 위해 1년간 보관 및 이용됩니다.
            </p>
            <div id="marketing-div" class="marketing-div">
              <div>
                <strong
                  >(주)플레이디에서 수집하는 개인정보의 항목과 수집 및 이용에
                  대한 목적을 알려드립니다.</strong
                >
                <p>1. 수집 및 이용목적</p>
                <span>마케팅 및 광고에 활용</span>
                <span>서비스 또는 컨텐츠 정보의 제공</span>
                <span>무료 컨설팅 메일 발송</span>
                <span>신규 리포트 발간 소식 안내</span>
                <p>2. 수집 및 항목</p>
                <span>필수 : 이름. 이메일 주소, 회사명(소속)</span>
                <span>선택 : 직업, 직급, 부서(팀명)</span>
                <p>3. 보유 및 이용 기간</p>
                <span
                  >수집·이용 동의일로부터 1년간 보관 및 이용. (단, 정보주체의
                  삭제 요청 시 삭제)</span
                >
                <p class="__last">
                  ※ 귀하는 개인정보 수집·이용 제공에 동의하지 않을 권리가
                  있으며, 동의하지 않을 경우 수집 목적에 따른 혜택에 제한이 있을
                  수 있습니다.
                </p>
              </div>
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
        <a href="#" class="platter"
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

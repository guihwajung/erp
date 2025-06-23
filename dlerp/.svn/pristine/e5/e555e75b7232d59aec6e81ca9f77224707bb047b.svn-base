(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("부가세 정보 입력");
            this.getSetter("maxwidth").set("550");
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATTUJA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATBGJE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PERCORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FOREIGN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SPECIAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BADDEBT\" type=\"STRING\" size=\"256\"/><Column id=\"CK_OMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"CK_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CASHBILL\" type=\"STRING\" size=\"256\"/><Column id=\"PROOF_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DHVPR_VAT_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"SP\">DHVPR_VAT_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"pGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATTUJA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATBGJE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PERCORP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DIRECT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FOREIGN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CREDIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SPECIAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"CK_OMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CK_BADDEBT\" type=\"STRING\" size=\"256\"/><Column id=\"CK_DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">매입</Col><Col id=\"CD_CODE\">I</Col></Row><Row><Col id=\"DS_CODE\">매출</Col><Col id=\"CD_CODE\">O</Col></Row><Row><Col id=\"DS_CODE\">현금영수증</Col><Col id=\"CD_CODE\">Z</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">세금계산서</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">계산서</Col></Row><Row><Col id=\"TY_SALEBUY\">Z</Col><Col id=\"CD_CODE\">R</Col><Col id=\"DS_CODE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">A</Col><Col id=\"CD_CODE\">AA</Col><Col id=\"DS_CODE\">일반세금계산서</Col></Row><Row><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_VATPROOF\">A</Col><Col id=\"CD_CODE\">AA</Col><Col id=\"DS_CODE\">일반세금계산서</Col></Row><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">A</Col><Col id=\"CD_CODE\">AC</Col><Col id=\"DS_CODE\">매입불공제</Col></Row><Row><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_VATPROOF\">A</Col><Col id=\"CD_CODE\">AE</Col><Col id=\"DS_CODE\">건별매출</Col></Row><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">A</Col><Col id=\"CD_CODE\">AD</Col><Col id=\"DS_CODE\">영세율</Col></Row><Row><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_VATPROOF\">A</Col><Col id=\"CD_CODE\">AD</Col><Col id=\"DS_CODE\">영세율</Col></Row><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">B</Col><Col id=\"CD_CODE\">BA</Col><Col id=\"DS_CODE\">계산서</Col></Row><Row><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_VATPROOF\">B</Col><Col id=\"CD_CODE\">BA</Col><Col id=\"DS_CODE\">계산서</Col></Row><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RH</Col><Col id=\"DS_CODE\">일반영수증</Col></Row><Row><Col id=\"TY_SALEBUY\">Z</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RH</Col><Col id=\"DS_CODE\">일반영수증</Col></Row><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RJ</Col><Col id=\"DS_CODE\">신용카드</Col></Row><Row><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RJ</Col><Col id=\"DS_CODE\">신용카드</Col></Row><Row><Col id=\"TY_SALEBUY\">Z</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RJ</Col><Col id=\"DS_CODE\">신용카드</Col></Row><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RK</Col><Col id=\"DS_CODE\">신용카드(매입불공제)</Col></Row><Row><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RK</Col><Col id=\"DS_CODE\">신용카드(매입불공제)</Col></Row><Row><Col id=\"TY_SALEBUY\">Z</Col><Col id=\"CD_VATPROOF\">R</Col><Col id=\"CD_CODE\">RK</Col><Col id=\"DS_CODE\">신용카드(매입불공제)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BGJE", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_VATPROOF\">AA</Col><Col id=\"CD_CODE\">AAA</Col><Col id=\"DS_CODE\">부가세안분대상</Col></Row><Row><Col id=\"TY_VATPROOF\">AA</Col><Col id=\"CD_CODE\">AAB</Col><Col id=\"DS_CODE\">부가세안분제외(100%공제)</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACA</Col><Col id=\"DS_CODE\">비사업용소형자동차분</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACB</Col><Col id=\"DS_CODE\">사업과관련없는지출</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACC</Col><Col id=\"DS_CODE\">면세사업관련분</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACD</Col><Col id=\"DS_CODE\">필요적 기재사항 누락 등</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACE</Col><Col id=\"DS_CODE\">접대비 및 이와 유사한 비용 관련</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACF</Col><Col id=\"DS_CODE\">토지의 자본적 지출 관련</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACG</Col><Col id=\"DS_CODE\">사업자등록 전 매입세액</Col></Row><Row><Col id=\"TY_VATPROOF\">AC</Col><Col id=\"CD_CODE\">ACH</Col><Col id=\"DS_CODE\">금거래계좌 미사용 관련 매입세액</Col></Row><Row><Col id=\"TY_VATPROOF\">RJ</Col><Col id=\"CD_CODE\">RJ2</Col><Col id=\"DS_CODE\">법인카드(No VAT)</Col></Row><Row><Col id=\"TY_VATPROOF\">RJ</Col><Col id=\"CD_CODE\">RJ0</Col><Col id=\"DS_CODE\">법인카드(안분대상)</Col></Row><Row><Col id=\"TY_VATPROOF\">RJ</Col><Col id=\"CD_CODE\">RJ1</Col><Col id=\"DS_CODE\">법인카드(안분제외)</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\">RJ4</Col><Col id=\"DS_CODE\">비사업용소형자동차분(법인카드)</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\">RJ5</Col><Col id=\"DS_CODE\">사업과관련없는지출(법인카드)</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\">RJ6</Col><Col id=\"DS_CODE\">면세사업관련분(법인카드)</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\">RJ7</Col><Col id=\"DS_CODE\">필요적 기재사항 누락 등</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\">RJ8</Col><Col id=\"DS_CODE\">접대비 및 이와 유사한 비용 관련</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\">RJ9</Col><Col id=\"DS_CODE\">토지의 자본적 지출 관련</Col></Row><Row><Col id=\"TY_VATPROOF\">RK</Col><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">사업자등록 전 매입세액</Col></Row><Row><Col id=\"TY_VATPROOF\">BA</Col><Col id=\"CD_CODE\">BAA</Col><Col id=\"DS_CODE\">안분대상</Col></Row><Row><Col id=\"TY_VATPROOF\">BA</Col><Col id=\"TY_SALEBUY\">O</Col><Col id=\"CD_CODE\">BAB</Col><Col id=\"DS_CODE\">교부면제분</Col></Row><Row><Col id=\"TY_VATPROOF\">RH</Col><Col id=\"CD_CODE\">RH1</Col><Col id=\"DS_CODE\">현금영수증</Col><Col id=\"TY_SALEBUY\">Z</Col></Row><Row><Col id=\"TY_VATPROOF\">RH</Col><Col id=\"CD_CODE\">RH2</Col><Col id=\"DS_CODE\">일반영수증</Col><Col id=\"TY_SALEBUY\">Z</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_SERVICE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">해당사항없음</Col><Col id=\"CD_CODE\">BA</Col></Row><Row><Col id=\"DS_CODE\">일반접대비</Col><Col id=\"CD_CODE\">BB</Col></Row><Row><Col id=\"DS_CODE\">해외접대비</Col><Col id=\"CD_CODE\">BC</Col></Row><Row><Col id=\"DS_CODE\">소액접대비</Col><Col id=\"CD_CODE\">BD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATTUJA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">TA</Col><Col id=\"DS_CODE\">수입금액제외:(고정자산매각)</Col></Row><Row><Col id=\"CD_CODE\">TB</Col><Col id=\"DS_CODE\">수입금액제외:(전기요금외)</Col></Row><Row><Col id=\"CD_CODE\">TC</Col><Col id=\"DS_CODE\">수입금액제외:(간주임대료)</Col></Row><Row><Col id=\"CD_CODE\">TD</Col><Col id=\"DS_CODE\">수입금액제외:(보험료)</Col></Row><Row><Col id=\"CD_CODE\">TE</Col><Col id=\"DS_CODE\">수입금액제외:(수도요금전력기금)</Col></Row><Row><Col id=\"CD_CODE\">TF</Col><Col id=\"DS_CODE\">수입금액제외:(기타)</Col></Row><Row><Col id=\"CD_CODE\">TG</Col><Col id=\"DS_CODE\">분양:(분양해약)</Col></Row><Row><Col id=\"CD_CODE\">TH</Col><Col id=\"DS_CODE\">분양:(기타)</Col></Row><Row><Col id=\"CD_CODE\">TI</Col><Col id=\"DS_CODE\">부동산:(용역)</Col></Row><Row><Col id=\"CD_CODE\">TJ</Col><Col id=\"DS_CODE\">부동산:(기타)</Col></Row><Row><Col id=\"CD_CODE\">TK</Col><Col id=\"DS_CODE\">부동산:(용지매출)</Col></Row><Row><Col id=\"CD_CODE\">TL</Col><Col id=\"DS_CODE\">공사:(공사수입)</Col></Row><Row><Col id=\"CD_CODE\">TM</Col><Col id=\"DS_CODE\">공사:(기타)</Col></Row><Row><Col id=\"CD_CODE\">TN</Col><Col id=\"DS_CODE\">용역:(용역수입)</Col></Row><Row><Col id=\"CD_CODE\">TO</Col><Col id=\"DS_CODE\">용역:(기타)</Col></Row><Row><Col id=\"CD_CODE\">TP</Col><Col id=\"DS_CODE\">임대:(임대료수입)</Col></Row><Row><Col id=\"CD_CODE\">TQ</Col><Col id=\"DS_CODE\">임대:(기타)</Col></Row><Row><Col id=\"CD_CODE\">TR</Col><Col id=\"DS_CODE\">부동산:(씨엔알)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VENDOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">일반</Col><Col id=\"CD_CODE\">F</Col></Row><Row><Col id=\"DS_CODE\">금융</Col><Col id=\"CD_CODE\">B</Col></Row><Row><Col id=\"DS_CODE\">개인</Col><Col id=\"CD_CODE\">P</Col></Row><Row><Col id=\"DS_CODE\">기타</Col><Col id=\"CD_CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_VATDEPT_ACNT</Col><Col id=\"DS_FIELD\">발의부서</Col></Row><Row><Col id=\"CD_FIELD\">CD_ACCOUNT</Col><Col id=\"DS_FIELD\">계정코드</Col></Row><Row><Col id=\"CD_FIELD\">TY_SALEBUY</Col><Col id=\"DS_FIELD\">거래구분</Col></Row><Row><Col id=\"CD_FIELD\">CD_VATPROOF</Col><Col id=\"DS_FIELD\">증빙코드</Col></Row><Row><Col id=\"CD_FIELD\">TY_VATPROOF</Col><Col id=\"DS_FIELD\">증빙구분</Col></Row><Row><Col id=\"CD_FIELD\">TY_VATBGJE</Col><Col id=\"DS_FIELD\">안분구분</Col></Row><Row><Col id=\"DS_FIELD\">투자유형</Col><Col id=\"CD_FIELD\">TY_VATTUJA</Col></Row><Row><Col id=\"CD_FIELD\">DT_PROOF</Col><Col id=\"DS_FIELD\">증빙일자</Col></Row><Row><Col id=\"CD_FIELD\">AM_SUPPLY</Col><Col id=\"DS_FIELD\">공급가액</Col></Row><Row><Col id=\"CD_FIELD\">AM_VAT</Col><Col id=\"DS_FIELD\">부가세액</Col></Row><Row><Col id=\"CD_FIELD\">AM_SERVICE</Col><Col id=\"DS_FIELD\">봉사료</Col></Row><Row><Col id=\"CD_FIELD\">DS_REM</Col><Col id=\"DS_FIELD\">적요</Col></Row><Row><Col id=\"CD_FIELD\">TY_VENDOR</Col><Col id=\"DS_FIELD\">거래처구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PERCORP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">사업등록</Col><Col id=\"CD_CODE\">F</Col></Row><Row><Col id=\"DS_CODE\">주민등록</Col><Col id=\"CD_CODE\">P</Col></Row><Row><Col id=\"DS_CODE\">누락여부</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"600","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("증빙정보 입력");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATDEPT_ACNT","10","staTitle:5","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("발의부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","10","staCD_VATDEPT_ACNT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("투자계정");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","10","staCD_ACCOUNT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATPROOF","10","staTY_SALEBUY:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("증빙코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VATPROOF","10","staCD_VATPROOF:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BGJE","10","staTY_VATPROOF:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("안분구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SERVICE","10","staTY_BGJE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("접대비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VATTUJA","10","staCD_SERVICE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("투자유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF","10","staTY_VATTUJA:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("증빙일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY","10","staDT_PROOF:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","10","staAM_SUPPLY:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("부가세액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SERVICE","10","staAM_VAT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("봉사료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REM","10","staAM_SERVICE:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PRECORP","10","staDS_REM:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("거래처구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","10","staTY_PRECORP:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","10","staCD_VENDOR:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_CREDIT","10","staNO_SJC:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("신용카드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VAT","10","staNO_CREDIT:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("체크필드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VATDEPT_ACNT","staCD_VATDEPT_ACNT:-1","staTitle:5",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACCOUNT","staCD_ACCOUNT:-1","staBgCD_VATDEPT_ACNT:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_SALEBUY","staTY_SALEBUY:-1","staBgCD_ACCOUNT:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VATPROOF","staCD_VATPROOF:-1","staBgTY_SALEBUY:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_VATPROOF","staTY_VATPROOF:-1","staBgCD_VATPROOF:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_BGJE","staTY_BGJE:-1","staBgTY_VATPROOF:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_SERVICE","staCD_SERVICE:-1","staBgTY_BGJE:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_VATTUJA","staTY_VATTUJA:-1","staBgCD_SERVICE:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_PROOF","staDT_PROOF:-1","staBgTY_VATTUJA:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SUPPLY","staAM_SUPPLY:-1","staBgDT_PROOF:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_VAT","staAM_VAT:-1","staBgAM_SUPPLY:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_SERVICE","staAM_SERVICE:-1","staBgAM_VAT:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_REM","staDS_REM:-1","staBgAM_SERVICE:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_PERCORP","staTY_PRECORP:-1","staBgDS_REM:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staBgTY_PERCORP:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_SJC","staNO_SJC:-1","staBgCD_VENDOR:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_CREDIT","staNO_CREDIT:-1","staBgNO_SJC:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_VAT","staTY_VAT:-1","staBgNO_CREDIT:-1",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VATDEPT_ACNT","staCD_VATDEPT_ACNT:5","staTitle:10",null,"20","15",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_YNSLIPACCEPT");
            obj.set_taborder("37");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:5","ccfCD_VATDEPT_ACNT:9",null,"20","15",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_YNSLIP");
            obj.set_taborder("38");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SALEBUY","staTY_SALEBUY:5","ccfCD_ACCOUNT:9","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoCD_VATPROOF","staCD_VATPROOF:5","rdoTY_SALEBUY:9","250","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_innerdataset("dsCD_VATPROOF");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATPROOF","staTY_VATPROOF:5","rdoCD_VATPROOF:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_innerdataset("dsTY_VATPROOF");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_BGJE","staTY_BGJE:5","ccboTY_VATPROOF:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_innerdataset("dsTY_BGJE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboCD_SERVICE","staCD_SERVICE:5","ccboTY_BGJE:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_innerdataset("dsCD_SERVICE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATTUJA","staTY_VATTUJA:5","ccboCD_SERVICE:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_innerdataset("dsTY_VATTUJA");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PROOF","staDT_PROOF:5","ccboTY_VATTUJA:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPPLY","staAM_SUPPLY:5","ctclDT_PROOF:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_VAT","staAM_VAT:5","ctxtAM_SUPPLY:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SERVICE","staAM_SERVICE:5","ctxtAM_VAT:9","239","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_REM","staDS_REM:5","ctxtAM_SERVICE:9",null,"20","15",null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_PERCORP","staTY_PRECORP:5","ctxtDS_REM:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_innerdataset("dsTY_PERCORP");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VENDOR","staCD_VENDOR:5","rdoTY_PERCORP:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsTY_VENDOR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","ccboTY_VENDOR:3","rdoTY_PERCORP:9",null,"20","15",null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.getSetter("CodeFindName").set("DHX_CFVENDOR_BY_TYVENDOR");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SJC","staNO_SJC:5","ccfCD_VENDOR:9",null,"20","15",null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CREDIT","staNO_CREDIT:5","ctxtNO_SJC:9",null,"20","15",null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_SPECIAL","staTY_VAT:5","ctxtNO_CREDIT:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("간이과세");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkCK_OMIT","cchkYN_SPECIAL:2","ctxtNO_CREDIT:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("대손여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkCK_DELAY","cchkCK_OMIT:2","ctxtNO_CREDIT:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("지연여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","234","divData:5","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","310","divData:5","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","158","divData:5","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_VATDEPT_ACNT.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_VATDEPT_ACNT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.rdoTY_SALEBUY","value","dsList","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.rdoCD_VATPROOF","value","dsList","CD_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccboTY_VATPROOF","value","dsList","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccboTY_BGJE","value","dsList","TY_VATBGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccboCD_SERVICE","value","dsList","CD_SERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccboTY_VATTUJA","value","dsList","TY_VATTUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctclDT_PROOF","value","dsList","DT_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_SUPPLY","value","dsList","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_VAT","value","dsList","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtAM_SERVICE","value","dsList","AM_SERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtDS_REM","value","dsList","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.rdoTY_PERCORP","value","dsList","TY_PERCORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ccfNO_CREDIT.form.CDTextBox","value","dsList","NO_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.cchkYN_SPECIAL","value","dsList","YN_SPECIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.cchkCK_OMIT","value","dsList","CK_OMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.cchkCK_DELAY","value","dsList","CK_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ccboTY_VENDOR","value","dsList","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ctxtNO_CREDIT","value","dsList","NO_CREDIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ISSUEVATDLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var ownerFrame = this.getOwnerFrame();

        	this.dsSearch.setColumn(0, "IUD_FLAG"    , ownerFrame.IUD_FLAG);
        	this.dsSearch.setColumn(0, "YN_VAT"      , ownerFrame.YN_VAT);
        	this.dsSearch.setColumn(0, "NO_VAT"      , ownerFrame.NO_VAT);
        	this.dsSearch.setColumn(0, "IN_CD_SLIP"  , ownerFrame.CD_SLIP);
        	this.dsSearch.setColumn(0, "TY_SALEBUY"  , ownerFrame.TY_SALEBUY);
        	this.dsSearch.setColumn(0, "CD_VATPROOF" , ownerFrame.CD_VATPROOF);
        	this.dsSearch.setColumn(0, "TY_VATPROOF" , ownerFrame.TY_VATPROOF);
        	this.dsSearch.setColumn(0, "TY_VATTUJA"  , ownerFrame.TY_VATTUJA);
        	this.dsSearch.setColumn(0, "TY_VATBGJE"  , ownerFrame.TY_VATBGJE);
        	this.dsSearch.setColumn(0, "YN_DIRECT"   , ownerFrame.YN_DIRECT);
        	this.dsSearch.setColumn(0, "CD_CORP"     , ownerFrame.CD_CORP);
        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", ownerFrame.CD_DEPT_ACNT);
        	this.dsSearch.setColumn(0, "DS_DEPT_ACNT", ownerFrame.DS_DEPT_ACNT);
        	this.dsSearch.setColumn(0, "CD_ACCOUNT"  , ownerFrame.CD_ACCOUNT);
        	this.dsSearch.setColumn(0, "DS_ACCOUNT"  , ownerFrame.DS_ACCOUNT);
        	this.dsSearch.setColumn(0, "YN_SERVICE"  , ownerFrame.YN_SERVICE);
        	this.dsSearch.setColumn(0, "CD_SERVICE"  , ownerFrame.CD_SERVICE);
        	this.dsSearch.setColumn(0, "AM_SERVICE"  , ownerFrame.AM_SERVICE);
        	this.dsSearch.setColumn(0, "AM_SUPPLY"   , ownerFrame.AM_SUPPLY);
        	this.dsSearch.setColumn(0, "AM_VAT"      , ownerFrame.AM_VAT);
        	this.dsSearch.setColumn(0, "AM_FOREIGN"  , ownerFrame.AM_FOREIGN);
        	this.dsSearch.setColumn(0, "CD_CURRENCY" , ownerFrame.CD_CURRENCY);
        	this.dsSearch.setColumn(0, "TY_PERCORP"  , ownerFrame.TY_PERCORP);
        	this.dsSearch.setColumn(0, "TY_VENDOR"   , ownerFrame.TY_VENDOR);
        	this.dsSearch.setColumn(0, "CD_VENDOR"   , ownerFrame.CD_VENDOR);
        	this.dsSearch.setColumn(0, "DS_VENDOR"   , ownerFrame.DS_VENDOR);
        	this.dsSearch.setColumn(0, "NO_CREDIT"   , ownerFrame.NO_CREDIT);
        	this.dsSearch.setColumn(0, "YN_SPECIAL"   , ownerFrame.YN_SPECIAL);
        	this.dsSearch.setColumn(0, "DT_PROOF"    , ownerFrame.DT_PROOF);
        	this.dsSearch.setColumn(0, "DS_REM"      , ownerFrame.DS_REM);
        	this.dsSearch.setColumn(0, "CK_OMIT"     , ownerFrame.CK_OMIT);
        	this.dsSearch.setColumn(0, "CK_BADDEBT"  , ownerFrame.CK_BADDEBT);
        	this.dsSearch.setColumn(0, "CK_DELAY"    , ownerFrame.CK_DELAY);
        	this.dsSearch.setColumn(0, "pGUBUN"      , ownerFrame.pGUBUN);

        	// 전표번호 && 부가세번호
        	if(!this.gfnIsNull(ownerFrame.CD_SLIP) && !this.gfnIsNull(ownerFrame.NO_VAT))
        	{
        		this.dsSearch.setColumn(0, "NO_VAT", ownerFrame.NO_VAT);
        		this.FormBtns.Select.click();
        	}

        	this.fnSetLoad();
        	this.viewSetter();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {};

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {};

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function()
        {
        	this.ccfCD_VATDEPT_ACNT = this.divData.form.ccfCD_VATDEPT_ACNT;		// 발의부서(코드파인더)
        	this.ccfCD_ACCOUNT      = this.divData.form.ccfCD_ACCOUNT;			// 투자계정(코드파인더)
        	this.rdoTY_SALEBUY      = this.divData.form.rdoTY_SALEBUY;			// 거래구분
        	this.rdoCD_VATPROOF     = this.divData.form.rdoCD_VATPROOF;			// 증빙코드
        	this.ccboTY_VATPROOF 	= this.divData.form.ccboTY_VATPROOF;		// 증빙구분
        	this.ccboTY_BGJE 		= this.divData.form.ccboTY_BGJE;			// 안분구분/매불구분
        	this.ccboCD_SERVICE 	= this.divData.form.ccboCD_SERVICE;			// 접대비
        	this.ccboTY_VATTUJA 	= this.divData.form.ccboTY_VATTUJA;			// 투자유형
        	this.ctclDT_PROOF 		= this.divData.form.ctclDT_PROOF;			// 증빙일자
        	this.ctxtAM_SUPPLY 		= this.divData.form.ctxtAM_SUPPLY;			// 공급가액
        	this.ctxtAM_VAT 		= this.divData.form.ctxtAM_VAT;				// 부가세액
        	this.ctxtAM_SERVICE 	= this.divData.form.ctxtAM_SERVICE;			// 봉사료
        	this.ctxtDS_REM 		= this.divData.form.ctxtDS_REM;				// 적요
        	this.rdoTY_PERCORP 		= this.divData.form.rdoTY_PERCORP;			// 거래처구분
        	this.ccboTY_VENDOR 		= this.divData.form.ccboTY_VENDOR;			// 거래처유형구분
        	this.ccfCD_VENDOR 		= this.divData.form.ccfCD_VENDOR;			// 거래처(코드파인더)
        	this.ctxtNO_SJC 		= this.divData.form.ctxtNO_SJC;				// 사업자번호
        	this.ctxtNO_CREDIT 		= this.divData.form.ctxtNO_CREDIT;			// 신용카드(코드파인더)
        	this.cchkYN_SPECIAL 	= this.divData.form.cchkYN_SPECIAL;			// 간이과세
        	this.cchkCK_OMIT 		= this.divData.form.cchkCK_OMIT;			// 대손여부
        	this.cchkCK_DELAY 		= this.divData.form.cchkCK_DELAY;			// 지연여부

        	this.ctxtNO_CASHBILL 	= this.divData.form.ctxtNO_CASHBILL;		// 현금영수증번호
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	// 발의부서
        	this.divData.form.ccfCD_VATDEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfCD_VATDEPT_ACNT.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	// 투자계정
        	this.divData.form.ccfCD_ACCOUNT.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfCD_ACCOUNT.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	// 거래처
        	this.divData.form.ccfCD_VENDOR.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";
        	this.divData.form.ccfCD_VENDOR.AfterCDTextChanged           = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_VAT"    , "string");
        	this.dsSelect.addColumn("IN_CD_SLIP", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_VAT"    , "string");		// 부가세번호
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_VAT", this.dsSearch.getColumn(0, "NO_VAT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {};

         /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;

        	if(this.dsSearch.getColumn(0, "IUD_FLAG") != "S")
        	{
        		if(this.pGUBUN != "")
        		{
        			this.pGUBUN = {};
        			this.pGUBUN.NO_VAT 		    = this.dsList.getColumn(0, "NO_VAT");
        			this.pGUBUN.CD_VATDEPT_ACNT = this.dsList.getColumn(0, "CD_DEPT_ACNT");
        			this.pGUBUN.DS_VATDEPT_ACNT = this.dsList.getColumn(0, "DS_DEPT_ACNT");
        			this.pGUBUN.TY_SALEBUY   	= this.dsList.getColumn(0, "TY_SALEBUY");
        			this.pGUBUN.CD_VATPROOF  	= this.dsList.getColumn(0, "CD_VATPROOF");
        			this.pGUBUN.TY_VATPROOF  	= this.dsList.getColumn(0, "TY_VATPROOF");
        			this.pGUBUN.TY_VATTUJA   	= this.dsList.getColumn(0, "TY_VATTUJA");
        			this.pGUBUN.TY_VATBGJE   	= this.dsList.getColumn(0, "TY_VATBGJE");
        			this.pGUBUN.CD_VATACCOUNT   = this.dsList.getColumn(0, "CD_ACCOUNT");
        			this.pGUBUN.DS_VATACCOUNT   = this.dsList.getColumn(0, "DS_ACCOUNT");
        			this.pGUBUN.TY_VATVENDOR    = this.dsList.getColumn(0, "TY_VENDOR");
        			this.pGUBUN.CD_VATVENDOR    = this.dsList.getColumn(0, "CD_VENDOR");
        			this.pGUBUN.DS_VATVENDOR    = this.dsList.getColumn(0, "DS_VENDOR");
        			this.pGUBUN.TY_PERCORP   	= this.dsList.getColumn(0, "TY_PERCORP");
        			this.pGUBUN.YN_SERVICE   	= this.dsList.getColumn(0, "YN_SERVICE");
        			this.pGUBUN.CD_SERVICE   	= this.dsList.getColumn(0, "CD_SERVICE");
        			this.pGUBUN.AM_SUPPLY    	= this.dsList.getColumn(0, "AM_SUPPLY");
        			this.pGUBUN.AM_VAT       	= this.dsList.getColumn(0, "AM_VAT");
        			this.pGUBUN.AM_FOREIGN   	= this.dsList.getColumn(0, "AM_FOREIGN");
        			this.pGUBUN.CD_CURRENCY  	= this.dsList.getColumn(0, "CD_CURRENCY");
        			this.pGUBUN.AM_SERVICE   	= this.dsList.getColumn(0, "AM_SERVICE");
        			this.pGUBUN.NO_CREDIT    	= this.dsList.getColumn(0, "NO_CREDIT");
        			this.pGUBUN.YN_SPECIAL   	= this.dsList.getColumn(0, "YN_SPECIAL");
        			this.pGUBUN.DT_PROOF     	= this.dsList.getColumn(0, "DT_PROOF");
        			this.pGUBUN.DS_VATREM       = this.dsList.getColumn(0, "DS_REM");
        			this.pGUBUN.YN_BADDEBT   	= this.dsList.getColumn(0, "YN_BADDEBT");
        			this.pGUBUN.CK_OMIT      	= this.dsList.getColumn(0, "CK_OMIT");
        			this.pGUBUN.CK_DELAY      	= this.dsList.getColumn(0, "CK_DELAY");
        			this.pGUBUN.PROOF_URL    	= this.dsList.getColumn(0, "PROOF_URL");
        			this.pGUBUN.DT_ACCOUNT   	= this.dsList.getColumn(0, "DT_ACCOUNT");
        			this.pGUBUN.blsSave	  	 	= true;

        			trace(this.dsList.saveXML());

        			this.getParentContext().close(JSON.stringify(this.pGUBUN));
        		}
        		else
        		{
        			this.pGUBUN = {};
        			this.pGUBUN.blsSave = true;

        			// 삭제일 경우만.
        			if(this.dsSearch.getColumn(0, "IUD_FLAG") == "D") this.fnSaveData();
        		}
        	}
        	else
        	{
        		this.pGUBUN = {};
        		this.pGUBUN.blsSave = false;
        		this.getParentContext().close(JSON.stringify(this.pGUBUN));
        	}
        }

        this.fnSaveData = function()
        {
        	this.dsDelete.clearData();

        	var nrow = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nrow, "NO_VAT", this.dsList.getColumn(0, "NO_VAT"));

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
        	var outData     = "";
        	var strArg      = this.dsSearch.getColumn(0, "IUD_FLAG");
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {};

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {};

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {};

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {};

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	switch(svcID) {
        		case "select" :
        			if(this.dsList.rowcount > 0){

        			}
        			break;

        		case "save" :
        			this.gfnAlert("삭제가 정상처리되었습니다.", function() {
        				this.getParentContext().close(JSON.stringify(this.pGUBUN))
        			});
        			break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {

        		// 발의부서
        		case "ccfCD_VATDEPT_ACNT":
        			dsUserParam.setColumn(nrow, "LV_DEPT"      , this.UserInfo.LEVLV_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "Y");
        			dsUserParam.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "YR_ACCOUNT"   , "");
        		break;

        		// 투자계정
        		case "ccfCD_ACCOUNT":
        			dsUserParam.setColumn(nrow, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        		break;

        		// 거래처
        		case "ccfCD_VENDOR":
        			dsUserParam.setColumn(nrow, "TY_VENDOR"    , this.dsList.getColumn(0, "TY_VENDOR"));
        			dsUserParam.setColumn(nrow, "CD_DEPT_REF"  , this.dsList.getColumn(0, "CD_DEPT_ACNT"));
        			dsUserParam.setColumn(nrow, "ORIGENTTAX"   , "");
        		break;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	// 코드,명칭 외 추가 컬럼 처리
        	if(codeFindData.length > 0) {
        		if(id == "ccfCD_VENDOR")
        		{
        			this.dsList.setColumn(0, "NO_SJC", codeFindData[0]["DESC2"]);	// 사업자번호
        		}
        	}
        }

        /************************************************************************
         * 시작 이벤트
         ************************************************************************/
        /**
        *	분기별 화면 세팅
        */
        this.viewSetter = function() {

        	if(this.dsSearch.getColumn(0, "YN_VAT") == "Y") {

        		this.dsList.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));			// 발의부서
        		this.dsList.setColumn(0, "DS_DEPT_ACNT", this.dsSearch.getColumn(0, "DS_DEPT_ACNT"));			// 발의부서명
        		this.dsList.setColumn(0, "CD_ACCOUNT"  , this.dsSearch.getColumn(0, "CD_ACCOUNT"));				// 투자계정
        		this.dsList.setColumn(0, "DS_ACCOUNT"  , this.dsSearch.getColumn(0, "DS_ACCOUNT"));				// 투자계정명
        		this.dsList.setColumn(0, "CD_VATPROOF" , this.dsSearch.getColumn(0, "CD_VATPROOF"));			// 증빙코드
        		this.dsList.setColumn(0, "TY_SALEBUY"  , this.dsSearch.getColumn(0, "TY_SALEBUY"));				// 거래구분
        		this.dsList.setColumn(0, "TY_VATPROOF" , this.dsSearch.getColumn(0, "TY_VATPROOF"));			// 증빙구분
        		this.dsList.setColumn(0, "TY_VATTUJA"  , this.dsSearch.getColumn(0, "TY_VATTUJA"));				// 투자유형
        		this.dsList.setColumn(0, "TY_VATBGJE"  , this.dsSearch.getColumn(0, "TY_VATBGJE"));				// 매입불공제분코드
        		this.dsList.setColumn(0, "TY_PERCORP"  , this.dsSearch.getColumn(0, "TY_PERCORP"));				// 거래처유형구분
        		this.dsList.setColumn(0, "TY_VENDOR"   , this.dsSearch.getColumn(0, "TY_VENDOR"));				// 거래처구분
        		this.dsList.setColumn(0, "CD_VENDOR"   , this.dsSearch.getColumn(0, "CD_VENDOR"));				// 거래처코드
        		this.dsList.setColumn(0, "DS_VENDOR"   , this.dsSearch.getColumn(0, "DS_VENDOR"));				// 거래처명

        		if(this.dsList.getColumn(0, "TY_PERCORP") == "F") {
        			   this.dsList.setColumn(0, "NO_SJC", this.gfnNvl(this.dsSearch.getColumn(0, "NO_SJC"), "").replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3"));	// 사업자번호
        		} else this.dsList.setColumn(0, "NO_SJC", this.gfnNvl(this.dsSearch.getColumn(0, "NO_SJC"), "").replace(/(\d{6})(\d{7})/, "$1-$2"));				// 주민번호

        		this.dsList.setColumn(0, "YN_SERVICE"  , this.dsSearch.getColumn(0, "YN_SERVICE"));				// 접대여부
        		this.dsList.setColumn(0, "CD_SERVICE"  , this.dsSearch.getColumn(0, "CD_SERVICE"));				// 접대구분

        		this.dsList.setColumn(0, "AM_SUPPLY"   , this.dsSearch.getColumn(0, "AM_SUPPLY") || 0);			// 공급가액
        		this.dsList.setColumn(0, "AM_VAT"      , this.dsSearch.getColumn(0, "AM_SUPPLY") / 10 || 0);	// 부가세액
        		this.dsList.setColumn(0, "AM_SERVICE"  , 0);													// 봉사료

        		this.dsList.setColumn(0, "NO_CREDIT"   , this.dsSearch.getColumn(0, "NO_CREDIT"));				// 신용카드번호
        		this.dsList.setColumn(0, "DT_PROOF"    , this.dsSearch.getColumn(0, "DT_PROOF"));				// 증빙일자
        		this.dsList.setColumn(0, "DS_REM"      , this.dsSearch.getColumn(0, "DS_REM"));					// 적요
        		this.dsList.setColumn(0, "YN_SPECIAL"  , this.dsSearch.getColumn(0, "YN_SPECIAL"));				// 과세특례여부
        		this.dsList.setColumn(0, "CK_BADDEBT"  , this.dsSearch.getColumn(0, "CK_BADDEBT"));				// 대손여부
        		this.dsList.setColumn(0, "CK_OMIT"     , this.dsSearch.getColumn(0, "CK_OMIT"));				// 대손여부
        		this.dsList.setColumn(0, "CK_DELAY"    , this.dsSearch.getColumn(0, "CK_DELAY"));				// 지연여부

        	} else {

        		// YN_VAT이 N이면 무조건 INSERT.
        		this.dsSearch.setColumn(0, "IUD_FLAG", "I");

        		this.dsList.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));		// 발의부서
        		this.dsList.setColumn(0, "DS_DEPT_ACNT", this.dsSearch.getColumn(0, "DS_DEPT_ACNT"));		// 발의부서명
        		this.dsList.setColumn(0, "CD_ACCOUNT"  , this.dsSearch.getColumn(0, "CD_ACCOUNT"));			// 투자계정
        		this.dsList.setColumn(0, "DS_ACCOUNT"  , this.dsSearch.getColumn(0, "DS_ACCOUNT"));			// 투자계정명

        		this.dsList.setColumn(0, "CD_VATPROOF", "A");

        		// 거래구분
         		if(this.dsSearch.getColumn(0, "TY_SALEBUY") == "D") {	// 투자유형 : "D" or "C" ==> 자산변동에서 넘어옴.
         			this.dsList.setColumn(0, "TY_SALEBUY", "O");
        		} else {
        			this.dsList.setColumn(0, "TY_SALEBUY", "I");
        		}

        		this.dsList.setColumn(0, "DT_PROOF"   , this.gfnGetDate());
        		this.dsList.setColumn(0, "AM_SUPPLY"  , this.dsSearch.getColumn(0, "AM_SUPPLY") || 0);		// 공급가액
        		this.dsList.setColumn(0, "AM_VAT"     , this.dsSearch.getColumn(0, "AM_SUPPLY") / 10 || 0);	// 부가세액
        		this.dsList.setColumn(0, "AM_SERVICE" , 0);													// 봉사료

        		// 거래처구분
        		this.dsList.setColumn(0, "TY_PERCORP", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		if(this.dsSearch.getColumn(0, "TY_VENDOR") == "B") {
        			this.dsList.setColumn(0, "TY_PERCORP", "F");
        		}

        		this.dsList.setColumn(0, "TY_VENDOR" , this.dsSearch.getColumn(0, "TY_VENDOR") || "F");		// 거래처유형
        		this.dsList.setColumn(0, "CD_VENDOR" , this.dsSearch.getColumn(0, "CD_VENDOR"));			// 거래처코드
        		this.dsList.setColumn(0, "DS_VENDOR" , this.dsSearch.getColumn(0, "DS_VENDOR"));			// 거래처명
        		this.dsList.setColumn(0, "YN_SERVICE", this.dsSearch.getColumn(0, "YN_SERVICE"));			// 접대여부
        		this.dsList.setColumn(0, "DT_PROOF"  , this.dsSearch.getColumn(0, "DT_PROOF"));				// 증빙일자
        		this.dsList.setColumn(0, "DS_REM"    , this.dsSearch.getColumn(0, "DS_REM"));				// 자산명

        		// 대손여부 비활성화.

        	}

        	// 거래처 사업자번호 자동로드.
        	this.ccfCD_VENDOR.form.fnCodeFindLoad();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        // 확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        // 삭제버튼 클릭
        this.btnDel_onclick = function(obj,e)
        {
        	this.gfnConfirm("삭제를 진행하시겠습니까?", function(strId, val)
        	{
        		if(val)
        		{
        			this.dsSearch.setColumn(0, "IUD_FLAG", "D");
        			this.fnSave();
        		}
        	});
        };

        this.fnSetLoad = function()
        {
        	// 발의부서/계정코드/증빙일자는 수정할수 없다.
        	// 단, 신규입력시는 아래내용 수정가능함
        	// 전표에서 입력된 경우에는 수정불가
        	if(this.dsSearch.getColumn(0, "IUD_FLAG") == "S")
        	{
        		this.ccfCD_VATDEPT_ACNT.set_enable(false);	// 발의부서(코드파인더)
        		this.ccfCD_ACCOUNT.set_enable(false);		// 투자계정(코드파인더)
        		this.rdoTY_SALEBUY.set_enable(false);		// 거래구분
        		this.rdoCD_VATPROOF.set_enable(false);		// 증빙코드
        		this.ccboTY_VATPROOF.set_enable(false);		// 증빙구분
        		this.ccboTY_BGJE.set_enable(false);			// 안분구분/매불구분
        		this.ccboCD_SERVICE.set_enable(false);		// 접대비
        		this.ccboTY_VATTUJA.set_enable(false);		// 투자유형
        		this.ctclDT_PROOF.set_enable(false);		// 증빙일자
        		this.ctxtAM_SUPPLY.set_enable(true);		// 공급가액
        		this.ctxtAM_VAT.set_enable(true);			// 부가세액
        		this.ctxtAM_SERVICE.set_enable(true);		// 봉사료
        		this.ctxtDS_REM.set_enable(true);			// 적요
        		this.rdoTY_PERCORP.set_enable(false);		// 거래처구분
        		this.ccboTY_VENDOR.set_enable(false);		// 거래처유형구분
        		this.ccfCD_VENDOR.set_enable(false);		// 거래처(코드파인더)
        		this.ctxtNO_SJC.set_enable(true);			// 사업자번호
        		this.ctxtNO_CREDIT.set_enable(false);		// 신용카드
        		this.cchkYN_SPECIAL.set_enable(false);		// 간이과세
        		this.cchkCK_OMIT.set_enable(false);			// 대손여부
        		this.cchkCK_DELAY.set_enable(false);		// 지연여부

        		this.ctxtNO_CASHBILL.set_enable(true);		// 현금영수증번호
        	}

        	this.fnAddrowInit(this.dsList);

        	if(this.dsSearch.getColumn(0, "IUD_FLAG") == "U" && this.dsSearch.getColumn(0, "YN_DIRECT") != "직접") {
        		this.divData.form.ccfCD_ACCOUNT.set_enable(false);
        	}

        	// Default
        	this.btnDel.set_visible(false);	// 삭제버튼 비활성화.
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 거래구분 + 증빙코드
        		var cur = this.dsList.getColumn(0, "TY_SALEBUY") + this.dsList.getColumn(0, "CD_VATPROOF");

        		if(e.columnid == "TY_SALEBUY" || e.columnid == "CD_VATPROOF") {

        			if(e.columnid == "TY_SALEBUY") {

        				// 기타증빙은 기타상세만 설정 가능.(라디오버튼만 설정)
        				if(this.dsList.getColumn(0, "TY_SALEBUY") == "Z") {
        					this.dsCD_VATPROOF.filter("CD_CODE == 'R'");
        					this.dsList.setColumn(0, "CD_VATPROOF", "R");
        				}
        				else this.dsCD_VATPROOF.filter("");
        			}

        			// 라디오박스 이벤트.(LEVEL 1)
        			//                               컬럼 텍스트, 안/매  #접대 #투자 #부가 #봉사  #카드  #간이  #누락
        			if(cur == "IA") this.fnLvl1Setter("안분구분", [true , false, false, true , false, false, true , false]);	// 매입-세금계산서
        			if(cur == "IB") this.fnLvl1Setter("세부증빙", [true , false, false, false, false, true , true , true ]);	// 매입-계산서
        			if(cur == "IR") this.fnLvl1Setter("매불구분", [false, false, false, true , true , false, false, false]);	// 매입-기타
        			if(cur == "OA") this.fnLvl1Setter("세부증빙", [false, false, true , true , false, false, true , false]);	// 매출-세금계산서
        			if(cur == "OB") this.fnLvl1Setter("세부증빙", [true , false, true , false, false, true , true , false]);	// 매출-계산서
        			if(cur == "OR") this.fnLvl1Setter("세부증빙", [true , false, true , true , true , true , false, false]);	// 매출-기타
        			if(cur == "ZR") this.fnLvl1Setter("세부증빙", [true , false, false, true , true , true , false, false]);	// 기타증빙-기타
        		}

        		// 증빙구분 콤보박스 이벤트.(LEVEL 2)
        		if(e.columnid == "TY_SALEBUY" || e.columnid == "CD_VATPROOF" || e.columnid == "TY_VATPROOF") this.fnLvl2Setter();
        	}
        };

        /**
        *	Level 1 View Set
        */
        this.fnLvl1Setter = function($text, $eArr) {

        	// SET.
        	this.ccboTY_BGJE.set_enable($eArr[0]);			// 안분/매불구분
        	this.ccboCD_SERVICE.set_enable($eArr[1]);		// 접대비
        	this.ccboTY_VATTUJA.set_enable($eArr[2]);		// 투자유형
        	this.ctxtAM_VAT.set_enable($eArr[3]);			// 부가세액
        	this.ctxtAM_SERVICE.set_enable($eArr[4]);		// 봉사료
        	this.ctxtNO_CREDIT.set_enable($eArr[5]);		// 신용카드
        	this.cchkYN_SPECIAL.set_enable($eArr[6]);		// 간이과세
        	this.cchkCK_OMIT.set_enable($eArr[7]);			// 대손여부

        	// 증빙구분 세팅.
        	var cur_0 = this.dsList.getColumn(0, 'TY_SALEBUY');
        	var cur_1 = this.dsList.getColumn(0, 'CD_VATPROOF');

        	this.dsTY_VATPROOF.filter(   "TY_SALEBUY  == '" + cur_0  + "' && "
        	                           + "CD_VATPROOF == '" + cur_1 + "'");

        	this.dsList.setColumn(0, "TY_VATPROOF", this.dsTY_VATPROOF.getColumn(0, "CD_CODE"));

        	// 투자유형 (수입금액제외(기타))로 기본 세팅.
        	this.dsList.setColumn(0, "TY_VATTUJA", "TF");

        	// 체크필드 세팅.
        	if(cur_1 == "A") this.fnCheckFieldSetter([true , true, false]);
        	if(cur_1 == "B") this.fnCheckFieldSetter([true , true, false]);
        	if(cur_1 == "R") this.fnCheckFieldSetter([false, true, false]);

        	// 컬럼 텍스트 세팅.
        	this.fnStaticSetter("staTY_BGJE"  , $text      , $eArr[0] ? true : false);	// 안분/매불구분
        	this.fnStaticSetter("staNO_CREDIT", "신용카드", $eArr[5] ? true : false);	// 신용카드
        }

        /**
        *	Level 2 View Set
        */
        this.fnLvl2Setter = function() {

        	var ucur = this.dsList.getColumn(0, "TY_SALEBUY") + this.dsList.getColumn(0, "CD_VATPROOF");
        	var cur  = this.dsList.getColumn(0, "TY_VATPROOF");	// 증빙구분 콤보박스 Value

        	// 콤보박스 필터링.
        	this.dsTY_BGJE.filter("TY_VATPROOF == '" + this.dsList.getColumn(0, "TY_VATPROOF") + "'");

        	// 기본값
        	if(cur == "AA") this.fnLvl2AssistSetter("안분구분", false);
        	if(cur == "AC") this.fnLvl2AssistSetter("매불구분", true, "ACA");		// 비사업용소형자동차분
        	if(cur == "AE") this.fnLvl2AssistSetter("매불구분", false);
        	if(cur == "AD") this.fnLvl2AssistSetter("매불구분", false);
        	if(cur == "BA") this.fnLvl2AssistSetter("세부증빙", true, "BAA");		// 안분대상
        	if(cur == "RH") this.fnLvl2AssistSetter("매불구분", false);
        	if(cur == "RJ") this.fnLvl2AssistSetter("세부증빙", true, "RJ1");		// 법인카드(안분제외)
        	if(cur == "RK") this.fnLvl2AssistSetter("세부증빙", true, "RJ4");		// 비사업용소형자동차분(법인카드)

        	// ADD.
        	if(cur == "AA" && ucur == "IA") this.fnLvl2AssistSetter("안분구분", true, "AAB");

        	if(cur == "AD" && ucur == "IA") this.ctxtAM_VAT.set_enable(false);		// 부가세액
        	if(cur == "AD" && ucur != "IA") this.ctxtAM_VAT.set_enable(true);		// 부가세액
        }

        /**
        *	컬럼 init.
        *   FOR SINGLE FORM.
        */
        this.fnAddrowInit = function($dataset) {
        	$dataset.set_enableevent(false);

        	$dataset.addRow();
        	for(var i = 0; i < $dataset.getColCount(); ++i) $dataset.setColumn(0, $dataset.getColumnInfo(i).name, "");

        	$dataset.set_enableevent(true);
        }

        /**
        *	Static env set.
        */
        this.fnStaticSetter = function($target, $text, $underlineBool) {
        	this.divData.form[$target].set_text($text);
        	this.divData.form[$target].set_textDecoration($underlineBool ? "underline" : "none");
        }

        /**
        *	level2 assist function.
        */
        this.fnLvl2AssistSetter = function($text, $bool, $code) {
        	this.fnStaticSetter("staTY_BGJE", $text, $bool);							// 안분/매불구분
        	this.ccboTY_BGJE.set_enable($bool);											// 안분/매불구분

        	if(!this.gfnIsNull($code)) this.dsList.setColumn(0, "TY_VATBGJE", $code);	// $code
        	else                       this.dsList.setColumn(0, "TY_VATBGJE", "");
        }

        /**
        *	check field setter
        */
        this.fnCheckFieldSetter = function($bool) {
        	this.cchkYN_SPECIAL.set_enable($bool[0]);		// 간이과세
        	this.cchkCK_OMIT.set_enable($bool[1]);			// 대손여부
        	this.cchkCK_DELAY.set_enable($bool[2]);			// 지연여부
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondeactivate",this.form_ondeactivate,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.staCD_VATDEPT_ACNT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ISSUEVATDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

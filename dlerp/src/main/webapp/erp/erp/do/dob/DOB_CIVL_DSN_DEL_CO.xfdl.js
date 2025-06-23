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
            this.set_titletext("주택-약정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(605,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_DTL_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_DTL_SELECT</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_DTL_SELECT</Col></Row><Row><Col id=\"TARGET\">saveMst</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_MST_SAVE</Col></Row><Row><Col id=\"TARGET\">saveDtl</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_DTL_SAVE</Col></Row><Row><Col id=\"TARGET\">saveNm</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_DSN_CONSOR_NM_SAVE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONSOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DSN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_COST_SCO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DSN_SCO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">NO_COST_SCO</Col><Col id=\"DS_FIELD\">가격점수</Col></Row><Row><Col id=\"CD_FIELD\">NO_DSN_SCO</Col><Col id=\"DS_FIELD\">설계점수</Col></Row><Row><Col id=\"CD_FIELD\">DS_RM</Col><Col id=\"DS_FIELD\">비고</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","605","680",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrd1","5","30","595","250",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","422","577","178","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","124","606","476","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RM","5","606","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_DSN_SCO","5","577","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("설계점수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_COST_SCO","303","577","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("가격점수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","124","577","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RM","128","611","468","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle1","5","0","500","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("참여사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","5","285","500","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("설계사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrd2","5","315","595","250",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","36.86%","648","60","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","49.75%","648","60","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_COST_SCO","425","582","171","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("0.##0");
            obj.set_displaynulltext(" 0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_DSN_SCO","128","582","171","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("0.##0");
            obj.set_autoselect("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd01","473","5","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDelete01","540","5","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd02","473","290","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDelete02","540","290","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divData.form.ctxtDS_RM","value","dsDetail","DS_RM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ctxtNO_COST_SCO","value","dsDetail","NO_COST_SCO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtNO_DSN_SCO","value","dsDetail","NO_DSN_SCO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DOB_CIVL_DSN_DEL_CO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.DSN_CONSOR_GUBUN = this.getOwnerFrame().DSN_CONSOR_GUBUN;
        this.NO_CONSOR = this.getOwnerFrame().NO_CONSOR;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	// 첨부파일
        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "NO_CONSOR", this.NO_CONSOR);

        	//if(this.DSN_CONSOR_GUBUN == "U"){
        		this.FormBtns.Select.click();
        	//}
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }



        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	if(this.FormInfo.TY_AUTH == "R") {
        		this.divData.form.btnAdd01.set_enable(false);
        		this.divData.form.btnDelete01.set_enable(false);
        		this.divData.form.btnAdd02.set_enable(false);
        		this.divData.form.btnDelete02.set_enable(false);
        		this.divData.form.btnSave.set_enable(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.CD_CORP = "";

        	this.dxGrid1 = this.divData.form.objGrd1;	// 참여사
        	this.dxGrid2 = this.divData.form.objGrd2;	// 설계사
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOA_DSN_CONSOR_N");	// 참여사
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOA_DSN_CONSOR_Y");	// 설계사

        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam2";

        	// 그리드 코드파인드 값 변경
        	this.dxGrid1.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //참여사
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	dsUserParam.setColumn(nrow, "CD_CORP", "");
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "CIVL");
        	return true;
         }

         //설계사
         this.fnGrid_BeforeUserDataSetParam2 = function(id, dsUserParam, nrow)
         {
        	dsUserParam.setColumn(nrow, "CD_CORP", "");
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "DSGN");
        	return true;
         }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	if(id == "DOX_CFVENDOR_DH") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			var CD_VENDOR = arr[0].CD_VENDOR;
        			var chkCnt1 = this.dsList1.getCaseCount("CD_CONST_CO == '" + CD_VENDOR + "'");
        			if(chkCnt1 > 1){
        				this.gfnAlert("참여사 코드가 중복입니다.");
        				this.dsList1.setColumn(this.dsList1.rowposition,"CD_CONST_CO","")
        				this.dsList1.setColumn(this.dsList1.rowposition,"DS_CONST_CO","")
        				return false;
        			}

        			var CD_VENDOR = arr[0].CD_VENDOR;
        			var chkCnt2 = this.dsList2.getCaseCount("CD_CONST_CO == '" + CD_VENDOR + "'");
        			if(chkCnt2 > 1){
        				this.gfnAlert("설계사 코드가 중복입니다.");
        				this.dsList2.setColumn(this.dsList2.rowposition,"CD_CONST_CO","")
        				this.dsList2.setColumn(this.dsList2.rowposition,"DS_CONST_CO","")
        				return false;
        			}
        		}
        	}

        	return true;
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsDetailSave = new Dataset();

        	this.dsDetailSave.addColumn("TY_WRK", "string");	//
        	this.dsDetailSave.addColumn("CD_PROJ", "string");		// 프로젝트코드
        	this.dsDetailSave.addColumn("NO_CONSOR", "string");		// 설계심의 컨소시엄번호
        	this.dsDetailSave.addColumn("NO_COST_SCO", "bigdecimal");
        	this.dsDetailSave.addColumn("NO_DSN_SCO", "bigdecimal");
        	this.dsDetailSave.addColumn("DS_RM", "string");
        	this.dsDetailSave.addColumn("ID_USER", "string");
        	this.dsDetailSave.addRow();

        	this.dsList1Save = new Dataset();

        	this.dsList1Save.addColumn("TY_WRK", "string");			//
        	this.dsList1Save.addColumn("CD_PROJ", "string");		// 프로젝트코드
        	this.dsList1Save.addColumn("NO_CONSOR", "string");		// 설계심의 컨소시엄번호
        	this.dsList1Save.addColumn("NO_CONSOR_CO", "string");	// 설계심의 컨소시엄상세번호
        	this.dsList1Save.addColumn("CD_CONST_CO", "string");	// 건설사코드
        	this.dsList1Save.addColumn("YN_JUGAN", "string");		// 주간사여부
        	this.dsList1Save.addColumn("YN_DSN", "string");			// 설계사여부
        	this.dsList1Save.addColumn("RT_OUR", "bigdecimal");			// 지분율
        	this.dsList1Save.addColumn("ID_USER", "string");

        	this.dsNmSave = new Dataset();

        	this.dsNmSave.addColumn("CD_PROJ", "string");		// 프로젝트코드
        	this.dsNmSave.addColumn("NO_CONSOR", "string");		// 설계심의 컨소시엄번호
        	this.dsNmSave.addRow();
        }


        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){

        	this.dsSelect1 = new Dataset();
        	this.dsSelect2 = new Dataset();
        	this.dsSelect3 = new Dataset();
        	this.dsSelect1.copyData(this.dsSearch);
        	this.dsSelect2.copyData(this.dsSearch);
        	this.dsSelect3.copyData(this.dsSearch);

        	this.dsSelect1.setColumn(0, "YN_DSN", "N");
        	this.dsSelect2.setColumn(0, "YN_DSN", "Y");
        	this.dsSelect3.setColumn(0, "YN_DSN", "X");

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect1 select1=dsSelect2 detail=dsSelect3";
        	var outData     = "dsList1=select0 dsList2=select10 dsDetail=detail0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSave = function(obj,e){

        	// 가격점수/ 설계점수/ 비고 Dataset
        	this.dsDetailSave.setColumn(0, "TY_WRK", this.DSN_CONSOR_GUBUN);
        	this.dsDetailSave.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsDetailSave.setColumn(0, "NO_CONSOR", this.NO_CONSOR);
        	this.dsDetailSave.setColumn(0, "NO_COST_SCO", this.dsDetail.getColumn(0, "NO_COST_SCO"));
        	this.dsDetailSave.setColumn(0, "NO_DSN_SCO", this.dsDetail.getColumn(0, "NO_DSN_SCO"));
        	this.dsDetailSave.setColumn(0, "DS_RM", this.dsDetail.getColumn(0, "DS_RM"));
        	this.dsDetailSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "saveMst";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveMst=dsDetailSave";
        	var outData     = "dsDetailRst=saveMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnSaveDtl = function(P_NO_CONSOR){
        	// 참여사 목록 Dataset

        	var noConsor = P_NO_CONSOR;
        	if(this.DSN_CONSOR_GUBUN == "U"){
        		noConsor = this.NO_CONSOR;
        	}

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsList1Save.addRow();
        				this.dsList1Save.setColumn(nrow, "TY_WRK", flag);
        				this.dsList1Save.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsList1Save.setColumn(nrow, "CD_PROJ", this.getOwnerFrame().CD_PROJ);		// 프로젝트코드
        				this.dsList1Save.setColumn(nrow, "NO_CONSOR", noConsor);	// 설계심의 컨소시엄번호
        				this.dsList1Save.setColumn(nrow, "NO_CONSOR_CO", this.dsList1.getColumn(i, "NO_CONSOR_CO"));	// 설계심의 컨소시엄상세번호
        				this.dsList1Save.setColumn(nrow, "CD_CONST_CO", this.dsList1.getColumn(i, "CD_CONST_CO"));	// 건설사코드
        				this.dsList1Save.setColumn(nrow, "YN_JUGAN", this.dsList1.getColumn(i, "YN_JUGAN"));		// 주간사여부
        				this.dsList1Save.setColumn(nrow, "YN_DSN", "N");		// 설계사여부
        				this.dsList1Save.setColumn(nrow, "RT_OUR", this.dsList1.getColumn(i, "RT_OUR"));		// 지분율
        				break;
        		}
        	}

        	// 설계사 목록 Dataset
        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsList1Save.addRow();
        				this.dsList1Save.setColumn(nrow, "TY_WRK", flag);
        				this.dsList1Save.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsList1Save.setColumn(nrow, "CD_PROJ", this.getOwnerFrame().CD_PROJ);		// 프로젝트코드
        				this.dsList1Save.setColumn(nrow, "NO_CONSOR", noConsor);	// 설계심의 컨소시엄번호
        				this.dsList1Save.setColumn(nrow, "NO_CONSOR_CO", this.dsList2.getColumn(i, "NO_CONSOR_CO"));	// 설계심의 컨소시엄상세번호
        				this.dsList1Save.setColumn(nrow, "CD_CONST_CO", this.dsList2.getColumn(i, "CD_CONST_CO"));	// 건설사코드
        				this.dsList1Save.setColumn(nrow, "YN_JUGAN", this.dsList2.getColumn(i, "YN_JUGAN"));		// 주간사여부
        				this.dsList1Save.setColumn(nrow, "YN_DSN", "Y");		// 설계사여부
        				break;
        		}
        	}

        	var strSvcId    = "saveDtl";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveDtl=dsList1Save";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }


        this.fnSaveDsnConsorNm = function(P_NO_CONSOR){
        	// 참여사 목록 Dataset

        	var noConsor = P_NO_CONSOR;
        	if(this.DSN_CONSOR_GUBUN == "U"){
        		noConsor = this.NO_CONSOR;
        	}

        	this.dsNmSave.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsNmSave.setColumn(0, "NO_CONSOR", noConsor);

        	var strSvcId    = "saveNm";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveNm=dsNmSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if (errorCode == 0) {
        		if(svcID == "select") {
        			if(this.DSN_CONSOR_GUBUN == "I"){
        				this.dsDetail.insertRow(0);
        			}
        		} else if(svcID == "saveMst") {
        			this.fnSaveDtl(this.dsDetailRst.getColumn(0, "OUT_DATA"));
        		} else if(svcID == "saveDtl") {
        			this.fnSaveDsnConsorNm(this.dsDetailRst.getColumn(0, "OUT_DATA"));
        			this.getParentContext().close(true);
        		} else if(svcID == "saveNm") {
        			this.DSN_CONSOR_GUBUN = "U";
        			this.FormBtns.Select.click();
        		} else if(svcID == "delete") {
        			this.getParentContext().close(true);
        		}
        		this.fnSetButton();
        	} else {
        		this.gfnAlert(errorMsg);
        	}
        };

        /************************************************************************
         * 기타 이벤트 설정
         ************************************************************************/
        // 닫기버튼 이벤트
        this.divData_btnCancel_onclick = function(obj,e){
        	this.getParentContext().close(true);
        };

        //추가 버튼 이벤트
        this.divData_btnAdd01_onclick = function(obj,e){
        	var dxGridName = "this.dxGrid";
        	if(obj.name == "btnAdd01"){
        		dxGridName = dxGridName + "1";
        		var nrow = this.gfnGridAdd(eval(dxGridName));
        		this.dsList1.setColumn(nrow,"YN_JUGAN","N");
        		this.dsList1.setColumn(nrow,"RT_OUR",0);
        	}else if(obj.name == "btnAdd02"){
        		dxGridName = dxGridName + "2";
        		var nrow = this.gfnGridAdd(eval(dxGridName));
        		this.dsList2.setColumn(nrow,"YN_JUGAN","N");
        	}
        };

        //삭제 버튼 이벤트
        this.divData_btnDelete01_onclick = function(obj,e){
        	var dxGridName = "this.dxGrid";
        	if(obj.name == "btnDelete01"){
        		dxGridName = dxGridName + "1";
        	}else if(obj.name == "btnDelete02"){
        		dxGridName = dxGridName + "2";
        	}
        	this.gfnGridDel(eval(dxGridName));
        };

        //저장 버튼 이벤트
        this.divData_btnSave_onclick = function(obj,e){
        	//if(!this.gfnDataValidate(this.dsDetail, this.dsRequired))return;

        	var dsList1Cnt = this.dsList1.rowcount;
        	var dsList2Cnt = this.dsList2.rowcount;

        	if(dsList1Cnt > 0){

        		var YN_JUGAN_COUNT = 0;
        		var RT_OUR_TOTAL = 0;
        		var TOTAL_CNT = 0;

        		for(var i = 0; i < dsList1Cnt; i++){
        			if(this.gfnGetFlag(this.dsList1, i) != "D"){
        				TOTAL_CNT++;
        				if(this.dsList1.getColumn(i, "YN_JUGAN") == "Y"){
        					YN_JUGAN_COUNT++;
        				}
        				RT_OUR_TOTAL = RT_OUR_TOTAL + this.dsList1.getColumn(i, "RT_OUR");

        				if(this.gfnIsNull(this.dsList1.getColumn(i, "CD_CONST_CO"))){
        					this.gfnAlert("참여사 회사코드는 필수 입력 입니다.");
        					return;
        				}
        			}
        		}

        		if(YN_JUGAN_COUNT != 1 && TOTAL_CNT != 0){
        			this.gfnAlert("참여사 목록중 Main사는 반드시 1건 지정되어야 합니다.");
        			return;
        		}

        		if(RT_OUR_TOTAL != 100 && RT_OUR_TOTAL != 0 && TOTAL_CNT != 0){
        			this.gfnAlert("참여사 지분율(%)의 합이 0 또는 100 이어야합니다.");
        			return;
        		}

        	}else{
        		this.gfnAlert("참여사를 등록하세요.");
        		return;
        	}

        	if(dsList2Cnt > 0){

        		var YN_JUGAN_COUNT = 0;

        		for(var i = 0; i < dsList2Cnt; i++){
        			if(this.gfnGetFlag(this.dsList2, i) != "D"){
        				if(this.dsList2.getColumn(i, "YN_JUGAN") == "Y"){
        					YN_JUGAN_COUNT++;
        				}

        				if(this.gfnIsNull(this.dsList2.getColumn(i, "CD_CONST_CO"))){
        					this.gfnAlert("설계사 회사코드는 필수 입력 입니다.");
        					return;
        				}
        			}
        		}

        // 		if(YN_JUGAN_COUNT != 1){
        // 			this.gfnAlert("설계사 목록중 Main사는 반드시 1건 지정되어야 합니다.");
        // 			return;
        // 		}

        	}
        // 	else{
        // 		this.gfnAlert("설계사를 등록하세요.");
        // 		return;
        // 	}

        	this.FormBtns.Save.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnAdd01.addEventHandler("onclick",this.divData_btnAdd01_onclick,this);
            this.divData.form.btnDelete01.addEventHandler("onclick",this.divData_btnDelete01_onclick,this);
            this.divData.form.btnAdd02.addEventHandler("onclick",this.divData_btnAdd01_onclick,this);
            this.divData.form.btnDelete02.addEventHandler("onclick",this.divData_btnDelete01_onclick,this);
        };
        this.loadIncludeScript("DOB_CIVL_DSN_DEL_CO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

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
            this.set_titletext("자재업체검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMXPR_VENDOR_SEARCH_DM</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DMXPR_LICCOST_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RM_RECOMMEND\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RM_RECOMMEND\"/><Col id=\"RM_BIGO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COSTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REGIST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미등록사만</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">등록사만</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_COSTCLASS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100%","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자재업체검색");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","staTITLE:10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_COSTCLASS","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgCD_COSTCLASS","staCD_COSTCLASS:0.0","10.0",null,"24.0","50.00%",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_REGIST","staBgCD_COSTCLASS:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgYN_REGIST","staYN_REGIST:0.0","10.0",null,"24.0","0.00%",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","staCD_COSTCLASS:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:0.0","staCD_COSTCLASS:10.0",null,"24.0","50.00%",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","staBgCD_VENDOR:0.0","staCD_COSTCLASS:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgDS_VENDOR","staDS_VENDOR:0.0","staCD_COSTCLASS:10.0",null,"24.0","0.00%",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","0.0","staCD_VENDOR:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgNO_SJC","staNO_SJC:0.0","staCD_VENDOR:10.0",null,"24.0","50.00%",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_LICCOST","staBgNO_SJC:0.0","staCD_VENDOR:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBgDS_LICCOST","staDS_LICCOST:0.0","staCD_VENDOR:10.0",null,"24.0","0.00%",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_COSTCLASS","staCD_COSTCLASS:0.0","10.0","95","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_COSTCLASS");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LICCOST","ccboCD_COSTCLASS:0.0","10.0",null,"24.0","staYN_REGIST:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_LICCOST");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_REGIST","staYN_REGIST:0.0","10.0",null,"24.0","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsYN_REGIST");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_VENDOR","staCD_VENDOR:0.0","ccboCD_COSTCLASS:10.0",null,"24.0","staYN_REGIST:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:0.0","ccboCD_COSTCLASS:10.0",null,"24.0","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SJC","staNO_SJC:0.0","ctxtCD_VENDOR:10.0",null,"24.0","staDS_LICCOST:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LICCOST","staDS_LICCOST:0.0","ctxtCD_VENDOR:10.0",null,"24.0","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSearch","25%","divData:5","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","45.08%","divData:5","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","65%","divData:5","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccboCD_COSTCLASS","value","dsSearch","CD_COSTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCD_LICCOST","value","dsSearch","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboYN_REGIST","value","dsSearch","YN_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtCD_VENDOR","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDS_LICCOST","value","dsSearch","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DMA_VENDOR_SEARCHDLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        // 부문, 품목 코드 최초 세팅 관련되어 만든 해당화면 전역변수.
        this._FIRST = true;

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

        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_COSTCLASS) && !this.gfnIsNull(this.getOwnerFrame().CD_LICCOST))
        	{
        		this.dsSearch.setColumn(0, "CD_COSTCLASS", this.getOwnerFrame().CD_COSTCLASS);
        		this.dsSearch.setColumn(0, "CD_LICCOST", this.getOwnerFrame().CD_LICCOST);
        	}

        	this.fnSelect();

        	this._FIRST = false;
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_VENDOR_SEARCHDLG");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_COSTCLASS", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        	this.dsSelect.addColumn("YN_REGIST", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("DS_VENDOR", "string");
        	this.dsSelect.addColumn("NO_SJC", "string");
        	this.dsSelect.addColumn("DS_LICCOST", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSetDsSearch();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_COSTCLASS", this.dsSearch.getColumn(0, "CD_COSTCLASS"));
        	this.dsSelect.setColumn(0, "CD_LICCOST", this.dsSearch.getColumn(0, "CD_LICCOST"));
        	this.dsSelect.setColumn(0, "YN_REGIST", this.dsSearch.getColumn(0, "YN_REGIST"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "DS_VENDOR", this.dsSearch.getColumn(0, "DS_VENDOR"));
        	this.dsSelect.setColumn(0, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));
        	this.dsSelect.setColumn(0, "DS_LICCOST", this.dsSearch.getColumn(0, "DS_LICCOST"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsData.getColumn(0,"RM_RECOMMEND"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.txtRM_RECOMMEND.setFocus();
        		}
        		this.gfnAlert("추천사유는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"RM_BIGO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.txtRM_BIGO.setFocus();
        		}
        		this.gfnAlert("비고는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/
        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(errorCode == 0)
        		{
        			this.gfnGridAfterSelect(this.dxGrid);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "combo") {
        		if(errorCode == 0)
        		{
        			this.dsCD_COSTCLASS.insertRow(0);
        			this.dsCD_COSTCLASS.setColumn(0, "CD_CODE", "");
        			this.dsCD_COSTCLASS.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_COSTCLASS")))
        			{
        				this.divSearch.form.ccboCD_COSTCLASS.set_index(0);
        			}
        			this.fnSetCombo1();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "combo1") {
        		if(errorCode == 0)
        		{
        			this.dsCD_LICCOST.insertRow(0);
        			this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        			this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_LICCOST")))
        			{
        				this.divSearch.form.ccboCD_LICCOST.set_index(0);
        			}
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 저장 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.

        	var nrow = this.dsList.rowposition;

        	if(nrow < 0)
        	{
        		this.gfnAlert("선택된 업체가 없습니다.");
        		return;
        	}
        	var rtnMsg = this.dsList.getColumn(nrow, "CD_VENDOR") + "," + this.dsList.getColumn(nrow, "DS_VENDOR");

        	this.getParentContext().close(rtnMsg);
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H01");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_COSTCLASS=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        this.fnSetCombo1 = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_BUMUN", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_BUMUN", this.dsSearch.getColumn(0, "CD_COSTCLASS"));

        	var strSvcId    = "combo1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo1=dsCombo";
        	var outData     = "dsCD_LICCOST=combo10";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue)
        	{
        		if(e.columnid == "CD_COSTCLASS")
        		{
        			this.fnSetCombo1();

        			if(this._FIRST == false)
        			{
        				this.dsSearch.setColumn(0, "CD_LICCOST", "");
        			}
        		}
        	}

        };

        this.form_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13")
        	{
        		this.fnSelect();
        	}
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.divData_btnOk_onclick();
        };

        this.fnSetDsSearch = function()
        {
        	// Textbox의 경우 Focus를 벗어나지 않으면 Dataset에 들어가지 않아서 조치함.
        	this.dsSearch.setColumn(0, "CD_VENDOR", this.divSearch.form.ctxtCD_VENDOR.text);
        	this.dsSearch.setColumn(0, "DS_VENDOR", this.divSearch.form.ctxtDS_VENDOR.text);
        	this.dsSearch.setColumn(0, "NO_SJC", this.divSearch.form.ctxtNO_SJC.text);
        	this.dsSearch.setColumn(0, "DS_LICCOST", this.divSearch.form.ctxtDS_LICCOST.text);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.form_onkeydown,this);
            this.staTITLE.addEventHandler("onclick",this.divData_staTITLE_onclick,this);
            this.divSearch.form.staCD_COSTCLASS.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staYN_REGIST.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staCD_VENDOR.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staDS_VENDOR.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staNO_SJC.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divSearch.form.staDS_LICCOST.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.btnSearch.addEventHandler("onclick",this.fnSelect,this);
            this.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_VENDOR_SEARCHDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

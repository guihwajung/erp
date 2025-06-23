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
            this.set_titletext("New Form");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_BIDMAGAMTIME_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_PRE_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_PRE_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM_MIN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHOUR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMINUTE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">25</Col><Col id=\"DS_CODE\">25</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">35</Col><Col id=\"DS_CODE\">35</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">45</Col><Col id=\"DS_CODE\">45</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row><Row><Col id=\"CD_CODE\">55</Col><Col id=\"DS_CODE\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("입찰마감일시변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_PRE","0","staNO_BID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("현재");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM","0","staDT_BIDMAGAM_PRE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("변경");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDT_BIDMAGAM_PRE:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_BIDMAGAM:-1","staBg3:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:10",null,"20","208",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:3","staTITLE:10",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","edtCD_SITE:9",null,"20","208",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_BID","edtNO_BID:3","edtCD_SITE:9",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BIDMAGAM_PRE","staDT_BIDMAGAM_PRE:5","edtNO_BID:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_BIDMAGAM_PRE_HOUR","ctclDT_BIDMAGAM_PRE:5","edtNO_BID:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_PRE_HOUR","edtDT_BIDMAGAM_PRE_HOUR:3","staNO_BID:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("시");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_BIDMAGAM_PRE_MIN","staDT_BIDMAGAM_PRE_HOUR:3","edtNO_BID:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_PRE_MIN","edtDT_BIDMAGAM_PRE_MIN:3","staNO_BID:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("분");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BIDMAGAM","staDT_BIDMAGAM:5","ctclDT_BIDMAGAM_PRE:9","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDT_BIDMAGAM_HOUR","ctclDT_BIDMAGAM:5","ctclDT_BIDMAGAM_PRE:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsHOUR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_HOUR","ccboDT_BIDMAGAM_HOUR:3","staDT_BIDMAGAM_PRE:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("시");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDT_BIDMAGAM_MIN","staDT_BIDMAGAM_HOUR:3","ctclDT_BIDMAGAM_PRE:9","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsMINUTE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM_MIN","ccboDT_BIDMAGAM_MIN:3","staDT_BIDMAGAM_PRE:5","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("분");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","140","172","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","203","172","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_BID","value","dsData","DS_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctclDT_BIDMAGAM_PRE","value","dsData","DT_BIDMAGAM_PRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDT_BIDMAGAM_PRE_HOUR","value","dsData","DT_BIDMAGAM_PRE_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDT_BIDMAGAM_PRE_MIN","value","dsData","DT_BIDMAGAM_PRE_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_BIDMAGAM","value","dsData","DT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccboDT_BIDMAGAM_HOUR","value","dsData","DT_BIDMAGAM_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccboDT_BIDMAGAM_MIN","value","dsData","DT_BIDMAGAM_MIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_BIDMAGAMTIMEDLG.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsData.setColumn(0, "DS_BID", this.getOwnerFrame().DS_BID);
        	this.dsData.setColumn(0, "DT_BIDMAGAM_PRE", this.getOwnerFrame().DT_BIDMAGAM_PRE);
        	this.dsData.setColumn(0, "DT_BIDMAGAM_PRE_HOUR",  this.getOwnerFrame().DT_BIDMAGAM_PRE_HOUR);
        	this.dsData.setColumn(0, "DT_BIDMAGAM_PRE_MIN", this.getOwnerFrame().DT_BIDMAGAM_PRE_MIN);

        	this.dsData.setColumn(0, "DT_BIDMAGAM", this.getOwnerFrame().DT_BIDMAGAM_PRE);
        	this.dsData.setColumn(0, "DT_BIDMAGAM_HOUR", 16);
        	this.dsData.setColumn(0, "DT_BIDMAGAM_MIN", "00");

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("DT_ONLINEMAGAM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function()
        {
        	var validate = true;
        	var dt_onlinemagam_pre = this.dsData.getColumn(0, "DT_BIDMAGAM_PRE") + this.dsData.getColumn(0, "DT_BIDMAGAM_PRE_HOUR") + this.dsData.getColumn(0, "DT_BIDMAGAM_PRE_MIN");
        	var dt_onlinemagam = this.dsData.getColumn(0, "DT_BIDMAGAM") + this.dsData.getColumn(0, "DT_BIDMAGAM_HOUR") + this.dsData.getColumn(0, "DT_BIDMAGAM_MIN");

        	/*
        	if(nexacro.toNumber(dt_onlinemagam_pre) > nexacro.toNumber(dt_onlinemagam))
        	{
        		validate = false;
        		this.gfnAlert("변경일자가 현재일자보다 이전일 수는 없습니다.");
        	}
        	*/

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "update") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
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

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	var dt_onlinemagam = this.dsData.getColumn(0, "DT_BIDMAGAM") + this.dsData.getColumn(0, "DT_BIDMAGAM_HOUR") + this.dsData.getColumn(0, "DT_BIDMAGAM_MIN");

        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsUpdate.setColumn(nrow, "DT_ONLINEMAGAM", dt_onlinemagam);

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
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

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_BIDMAGAMTIMEDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

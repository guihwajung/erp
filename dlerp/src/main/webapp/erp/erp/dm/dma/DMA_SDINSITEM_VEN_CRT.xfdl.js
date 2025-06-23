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
                this._setFormPosition(375,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMAPR_SDINSITEM_VEN_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SDINS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">YN_KOR</Col><Col id=\"DS_FIELD\">국산여부</Col></Row><Row><Col id=\"CD_FIELD\">YM_SDINS</Col><Col id=\"DS_FIELD\">기준년월</Col></Row><Row><Col id=\"CD_FIELD\">AM_STANDARD</Col><Col id=\"DS_FIELD\">기준가</Col></Row><Row><Col id=\"CD_FIELD\">AM_SALE</Col><Col id=\"DS_FIELD\">할인금액</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_KOR","0","0","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("국산여부");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","79","0","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_SDINS","0","29","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("기준년월");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_STANDARD","0","58","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("기준가");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","79","29","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","79","58","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SALE","0","87","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("할인금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","116","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","79","87","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","79","116","291","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","31.47%","179","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("단가생성");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.47%","179","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_SDINS","84","34","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboYN_KOR","84","6","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divData_form_ccboYN_KOR_innerdataset = new nexacro.NormalDataset("divData_form_ccboYN_KOR_innerdataset", obj);
            divData_form_ccboYN_KOR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">국산</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">수입산</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_ccboYN_KOR_innerdataset);
            obj.set_text("국산");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_BIGO","84","122","282","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_STANDARD","84","63","96","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SALE","84","92","96","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,0");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.ctclYM_SDINS.form.TextBox","value","dsDetail","YM_SDINS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccboYN_KOR","value","dsDetail","YN_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtAM_STANDARD","value","dsDetail","AM_STANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtAM_SALE","value","dsDetail","AM_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ctxtRM_BIGO","value","dsDetail","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_SDINSITEM_VEN_CRT.xfdl", function() {
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

        	var dt = new Date();
        	this.divData.form.ctclYM_SDINS.form.TextBox.set_value(dt.getFullYear().toString()+this.inZero((dt.getMonth() + 1),2));
        	this.divData.form.ccboYN_KOR.set_index(0);


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
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
        	this.ccfCD_VENDOR = this.divData.form.ccfCD_VENDOR;
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

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YN_KOR", "string");		// 국산여부
        	this.dsInsert.addColumn("YM_SDINS", "string");		// 기준년월
        	this.dsInsert.addColumn("AM_STANDARD", "string");	// 기준가
        	this.dsInsert.addColumn("AM_SALE", "string");		// 할인금액
        	this.dsInsert.addColumn("RM_BIGO", "string");		// 피고
        	this.dsInsert.addColumn("ID_USER", "string");		// 입력자

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
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

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.gfnDataValidate(this.dsDetail, this.dsRequired))return;
        	this.gfnConfirm("생성 하시겠습니까?", "fnSaveDsDetail");
        };

        this.fnSaveDsDetail = function(svcId, val){
        	if(val){
        		this.dsInsert.clearData();
        		var nrow = this.dsInsert.addRow();

        		this.dsInsert.setColumn(nrow, "YN_KOR", this.dsDetail.getColumn(0, "YN_KOR"));
        		this.dsInsert.setColumn(nrow, "YM_SDINS", this.dsDetail.getColumn(0, "YM_SDINS"));
        		this.dsInsert.setColumn(nrow, "AM_STANDARD", this.dsDetail.getColumn(0, "AM_STANDARD"));
        		this.dsInsert.setColumn(nrow, "AM_SALE", this.dsDetail.getColumn(0, "AM_SALE"));
        		this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsDetail.getColumn(0, "RM_BIGO"));
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsInsert.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsInsert";
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

        	}
        }


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.inZero = function(p1,p2){
        	var zero ="";
        	for(var i=0; i<p2;i++) zero +="0";
        	return zero.toString().concat(p1).match(new RegExp("\\d{"+p2+"}$"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staBg2.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsDetail.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_SDINSITEM_VEN_CRT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

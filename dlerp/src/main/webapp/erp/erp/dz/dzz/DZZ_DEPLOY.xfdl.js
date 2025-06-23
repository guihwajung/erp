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
            this.set_titletext("리소스배포");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_FORM_FILE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_FORM_FILE_SAVE</Col></Row><Row><Col id=\"TARGET\">download</Col><Col id=\"SP\">DZZPR_FORM_FILE_DOWNLOAD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsServer", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SERVER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GUBUN\"/><Col id=\"NM_SERVER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeploy", this);
            obj._setContents("<ColumnInfo><Column id=\"FULL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIds", this);
            obj._setContents("<ColumnInfo><Column id=\"OLD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staNM_DEV","39","9","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대상");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","119","9","140","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_cboTY_GUBUN_innerdataset", obj);
            divSearch_form_cboTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">ERP</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B2B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">OZ레포트</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">전자결재문서</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboTY_GUBUN_innerdataset);
            obj.set_text("ERP");
            obj.set_value("ERP");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0","615",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","665","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnRight","622","242","34","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text(" ▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLeft","622","282","34","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_DEPLOY.xfdl", function() {
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

        	this.FormBtns.Select.click();
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
        	this.btnDeploy = this.gfnFormButtonAdd("btnDeploy", "fnDeploy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function()
        {
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function()
        {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_DEPLOY");
        	this.gfnGridInit(this.dxGrid2, this.dsDeploy, "DZ", "DZZ_DEPLOY");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "TY_GUBUN", "1");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	var strSvcId    = "select";
        	var strSvcType  = "deployList";
        	var inProc		= "";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsServer=dsServer dsList=dsDeploy";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        /*
         *	배포 버튼
         */
        this.fnSave = function()
        {

        };


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
        	if (svcID == "select") {
        		this.dsDeploy.clearData();
        		if (errorCode != 0) {
        			this.gfnAlert(errorMsg);
        			this.dsList.clearData();
        		} else {
        			this.dsList.set_keystring("S:-nx_sort-LAST_MODIFIED");
        			this.dsList.updateSortGroup();
        		}
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "deploy") {
        		if (errorCode == 0) {
        			this.gfnAlert("배포가 완료되었습니다.", [], "deployAlert", function() {
        				this.FormBtns.Select.click();
        			});
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divSearch_cboTY_GUBUN_onitemchanged = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };

        this.divData_btnRight_onclick = function(obj,e)
        {
        	var nSelectRow = this.dsList.rowposition;
        	if (nSelectRow > -1)
        	{
        		var nRow = this.gfnGridAdd(this.dxGrid2);
        		this.dsDeploy.copyRow(nRow, this.dsList, nSelectRow);
        		this.dsDeploy.setColumn(nRow, "OLD_IDX", nSelectRow);
        		this.dsList.deleteRow(nSelectRow);
        	}
        };

        this.divData_btnLeft_onclick = function(obj,e)
        {
        	var nSelectRow = this.dsDeploy.rowposition;
        	if (nSelectRow > -1)
        	{

        		this.dsList.copyRow(nRow, this.dsDeploy, nSelectRow);
        		this.gfnGridDel(this.dxGrid2);
        	}
        };


        this.fnDeploy = function()
        {
        	if(this.dsDeploy.rowcount == 0) return;

        	var strSvcId    = "deploy";
        	var strSvcType  = "deploy";
        	var inProc		= "";
        	var inData      = "dsServer=dsSearch dsDeploy=dsDeploy";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_GUBUN.addEventHandler("onitemchanged",this.divSearch_cboTY_GUBUN_onitemchanged,this);
            this.divData.form.btnRight.addEventHandler("onclick",this.divData_btnRight_onclick,this);
            this.divData.form.btnLeft.addEventHandler("onclick",this.divData_btnLeft_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsServer.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_DEPLOY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

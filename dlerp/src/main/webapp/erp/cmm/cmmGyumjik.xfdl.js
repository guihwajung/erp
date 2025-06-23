(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGyumjik");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBG","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd","20","44",null,"246","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsDeptList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"124\"/><Column size=\"69\"/><Column size=\"185\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"법인코드\"/><Cell col=\"1\" text=\"법인명\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CORP\"/><Cell col=\"1\" text=\"bind:DS_CORP\"/><Cell col=\"2\" text=\"bind:CD_DEPT\"/><Cell col=\"3\" text=\"bind:DS_DEPT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"grd:20","130","26","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","22","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConfirm:4","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta00","20","12",null,"25","19",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다음 부서중 로그인할 부서를 선택하세요.");
            obj.set_cssclass("sta_WF_notice");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGyumjik.xfdl", function() {
        this.cmmGyumjik_onload = function(obj,e)
        {
        	if(new String(this.getOwnerFrame().deptList).valueOf() != "undefined") {
        		var deptList = this.getOwnerFrame().deptList;
        		if(deptList.rowcount > 0) {
        			for(var i = 0; i < deptList.rowcount; i++) {
        				var nrow = this.dsDeptList.addRow();
        				this.dsDeptList.setColumn(nrow, "ID_USER", deptList.getColumn(i, "ID_USER"));
        				this.dsDeptList.setColumn(nrow, "CD_CORP", deptList.getColumn(i, "CD_CORP"));
        				this.dsDeptList.setColumn(nrow, "DS_CORP", deptList.getColumn(i, "DS_CORP"));
        				this.dsDeptList.setColumn(nrow, "CD_DEPT", deptList.getColumn(i, "CD_DEPT"));
        				this.dsDeptList.setColumn(nrow, "DS_DEPT", deptList.getColumn(i, "DS_DEPT"));
        			}
        			this.grd.setCellPos(0, 0);
        		}
        	}
        };

        this.div00_btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div00_btnConfirm_onclick = function(obj,e)
        {
        	this.fnConfirm();
        };

        this._grd_oncelldblclick = function(obj,e)
        {
        	this.fnConfirm();
        };

        this.fnConfirm = function() {
        	var json = {};
        	json.ID_USER = this.dsDeptList.getColumn(this.dsDeptList.rowposition, "ID_USER");
        	json.CD_CORP = this.dsDeptList.getColumn(this.dsDeptList.rowposition, "CD_CORP");
        	json.CD_DEPT = this.dsDeptList.getColumn(this.dsDeptList.rowposition, "CD_DEPT");

        	var objApp = this.gfnGetApplication();
        	objApp.DW_SPACE98 = null;
        	objApp.DW_SPACE99 = null;
        	this.close(JSON.stringify(json));
        };

        this.cmmGyumjik_onsize = function(obj,e)
        {
        	var nLeft = (this.width - this.divBtns.width) / 2;
        	this.divBtns.left = nLeft;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmGyumjik_onload,this);
            this.addEventHandler("onsize",this.cmmGyumjik_onsize,this);
            this.grd.addEventHandler("oncelldblclick",this._grd_oncelldblclick,this);
            this.divBtns.form.btnConfirm.addEventHandler("onclick",this.div00_btnConfirm_onclick,this);
            this.divBtns.form.btnCancel.addEventHandler("onclick",this.div00_btnCancel_onclick,this);
        };
        this.loadIncludeScript("cmmGyumjik.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

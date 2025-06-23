/**
*  컨설팅 표준화 작업
*  @FileName 	Grid.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	            	최초 생성 
*  2017.10.17     	consulting  	           	주석 정비
*  2017.10.18     	consulting  	           	multisort 오류 수정
*  2017.10.19		consulting			   	    찾기/바꾸기 기능 추가
*  2017.10.30       consulting			   	    그리드기능추가 및 스크립트정비
*  2018.01.16		consulting					gfnGetApplication 공통함수 변경
*******************************************************************************
*/
var pForm = nexacro.Form.prototype;

/************************************************************************
* 그리드 비동기 선언 gfnGridInitAsync 
* 설명:
* 기존 그리드 초기화는 동기 통신으로 셋팅되고 있는데
* 비동기 통신으로 변경하려다 보니 그리드 선언후 그리드를 제어하는 경우 셋팅이 완료되기 전이라 문제가 발생.
* 기존 화면들은 어쩔 수 없어서 그리드 선언이 많은 경우 화면 뜨는 속도가 느리므로
* 그런 화면들의 경우 비동기 처리를 위해서 gfnGridInitAsync 로 셋팅하고 
* 이벤트 선언을 제외하고 그리드 관련 수동 제어가 있으면 AfterInit 에서 처리하도록 변경해준다. 
* 단 AfterInit 선언시 자동으로 비동기 통신을 하므로 gfnGridInitAsync를 사용할 필요는 없음.
* gfnGridInitAsync는 수동 제어가 없는 경우 비동기 통신 선언을 위한  함수로 보면 된다. 
* AfterInit 선언은 그리드 초기화 전에 해줄것.
************************************************************************/
pForm.gfnGridInitAsync = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual) 
{
	this.gfnGridInit(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual, true);
}
/************************************************************************
 * 굿센 그리드 public 함수
 ************************************************************************/
/*
 *	그리드 초기화
 *	tree_column 타입이 boolean일 경우 is_manual 로 사용
 */ 
pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual, async) 
{
	//objGrid = new Grid();	
	
	var func = this.lookupFunc(objGrid.AfterInit);
	if (func != null) {
		async = true;
	}
	
	objGrid.set_binddataset(objDs);
	objGrid.set_cssclass("grd_GC");
//	objDs.bindgrid = objGrid;
// 	objGrid.bindform = this;
// 	objDs.bindform = this;
// 	this.fvGridInfo = objGrid;

	this._grd_group_panel_create(objGrid);
	
	if(this.gfnIsNull(tree_column)) {
		tree_column = "";
	} else {
		if(typeof(tree_column) == "boolean") {
			is_manual = tree_column;
		}
	}
	if(this.gfnIsNull(level_column)) {
		level_column = "";
	}
	
	objGrid.CD_SYSTEM = cd_system;
	objGrid.ID_GRID = id_grid;
	objGrid.TreeColumn = tree_column;
	objGrid.LevelColumn = level_column;
	objGrid.async = async;
	
	this._grd_info_call(objGrid, cd_system, id_grid, is_manual);
};

pForm.gfnGridSet = function(objForm, objGrid, objGridInfo, objGridSpec) {
	objGrid.set_cssclass("grd_GC");
	this._grd_set(objForm, objGrid, objGridInfo, objGridSpec);
};

/*
 * 그리드 로우 추가
 * 다중건 추가시는 
 * - objDs.set_enableevent false 처리후
 * - 완료후 gfnGridAddEnd 호출
 */
pForm.gfnGridAdd = function(objGrid, top_bottom_current, isFlagSet, eventOption) {
	if (top_bottom_current == null) top_bottom_current = "top";
	if (isFlagSet == null) isFlagSet = true;
	var dsEventOption = false;
	var objDs = objGrid.getBindDataset();
	if (this.gfnIsNull(objDs)) {
		return;
	}
	
	var isSort = true;	
	var nrow = 0;	
	var currentrow = objGrid.currentrow;
	if(objGrid.IsTree == true) {
		currentrow = objGrid.getDatasetRow(currentrow);
	}
	
	if(objDs.enableevent == true) {
		dsEventOption = true;
		objDs.set_enableevent(false);
	}
	if (top_bottom_current == "bottom" || objGrid.ty_add == "bottom") {
		nrow = objDs.addRow();
	} else if (top_bottom_current == "current") {
		nrow = objDs.insertRow(currentrow);
	} else if (top_bottom_current == "current_bottom") {
		nrow = objDs.insertRow(currentrow+1);
	}
	else {
		if (top_bottom_current > 0 || nexacro.isNumeric(new String(top_bottom_current))) 
		{
			isSort = false;
			if ( top_bottom_current < 0 )
			{
				 top_bottom_current = (objDs.rowcount > 0 && objDs.getColumn(0, this.ucFlag) == "#") ? 1 : 0;
			}
			else
			{
				top_bottom_current += (objDs.rowcount > 0 && objDs.getColumn(top_bottom_current, this.ucFlag) == "#") ? 1 : 0;
			}
			
			nrow = objDs.insertRow(top_bottom_current);
		} 
		else 
		{
			if(objDs.rowcount > 0 && objDs.getColumn(0, this.ucFlag) == "#") {
				nrow = objDs.insertRow(1);
			} else {
				nrow = objDs.insertRow(0);
			}
		}
	}
	
	if (isFlagSet) {
		objDs.setColumn(nrow, this.ucFlag, "I");
		if(top_bottom_current == "top") {
			objDs.setColumn(nrow, this.ucSort, "!"); // I 는 필터로우 다음에 오도록 정렬
		}
		if(objGrid.sub == "true") {
			this.gfnSetFormSubStatus(this, "I");
		} else {
			this.gfnSetFormStatus(this, "I");
		}
	}
	
	if(eventOption == null && dsEventOption) {
		objDs.set_enableevent(true);		
		this.gfnGridAddEnd(objGrid, nrow);
	}
	
	objGrid.setFocus();
	//this._grd_entercell(objGrid, objGrid.currentrow, objGrid.currentcell);
	return nrow;
};

pForm.gfnGridAddEnd = function(objGrid, nrow) 
{
	var objDs = objGrid.getBindDataset();
	if(nrow == null) nrow = objDs.rowposition;
	
	if(objGrid.currentrow != nrow) {
		objGrid.set_enableredraw(false);
		objGrid.setFocus();
		objGrid.clearSelect();
		objGrid.setCellPos(0, nrow);
		objGrid.set_enableredraw(true);
	}
	
	if(!this.gfnIsNull(objDs.keystring) && isSort) {
		objDs.updateSortGroup();
	}
};

/*
 *	그리드 로우 삭제 처리
 */ 
pForm.gfnGridDel = function(objGrid, yn_del_col) {
	var objDs = objGrid.getBindDataset();
	var rows = objGrid.getSelectedDatasetRows();
	
	if(rows.length > 0) {
		objDs.set_enableevent(false);

		for(var i = (rows.length - 1); i >= 0; i--) {
			var nrow = rows[i];
			var flag = objDs.getColumn(nrow, this.ucFlag);
			if(yn_del_col != null) {
				if(objDs.getColumn(nrow, yn_del_col) == "N") {
					continue;
				}
			}
			if (flag == "I") {
				objDs.deleteRow(nrow);
			} 
			else if (flag == "D") {
				objDs.setColumn(nrow, this.ucFlag, "");
			}
			else if (flag == "DU") {
				objDs.setColumn(nrow, this.ucFlag, "U");
			}
			else {
				if (flag == "U") {
					objDs.setColumn(nrow, this.ucFlag, "DU");
				}
				else if (flag != "#") {
					objDs.setColumn(nrow, this.ucFlag, "D");
				}
			}
		}
		objDs.set_enableevent(true);
		if (flag != "#") {
			if(objGrid.sub == "true") {
				this.gfnSetFormSubStatus(this, "D");
			} else {
				this.gfnSetFormStatus(this, "D");
			}
		}
	}
	
	this._grd_entercell(objGrid, objGrid.currentrow, objGrid.currentcell);	
};

/*
 *	그리드 해당 로우 flag 값 가져오기
 */ 
pForm.gfnGetFlag = function(objDs, row) {
	var flag = objDs.getColumn(row, this.ucFlag);
	if(!this.gfnIsNull(flag) && flag.length > 1) flag = flag.substr(0, 1);
	return flag;
};

/*
 *	그리드 현재 로우가 데이터로우 인지 체크
 */ 
pForm.gfnGridIsRow = function(objGrid) {
	var objDs = objGrid.getBindDataset();
	if (objGrid.currentrow < 0 || objDs.rowposition < 0) { return false; }
	else if (objDs.getColumn(objDs.rowposition, this.ucFlag) == "#") { return false; }
	else { return true; }
}

/*
 *	그리드 필수입력 컬럼 검사
 */ 
pForm.gfnGridValidate = function(objGrid) {
	var objDs = objGrid.getBindDataset();
	
	var msg = "";
	var nGridCol, nGridRow = -1;
	for (var i = 0; i < objDs.rowcount; i++) {
		var flag = this.gfnGetFlag(objDs, i);
		switch(flag) {
			case "I":
			case "U":
				var arrRequired = objGrid.usRequired;
				for(var j = 0; j < arrRequired.length; j++) {
					var spl_req = arrRequired[j].split(';');
					var colnm = spl_req[0];
					var header = spl_req[1];
					if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
						msg += (i + 1) + "행: [" + header + "] 필수입력값입니다.\n";
						
						if (nGridRow == -1)
						{
							nGridRow = i;
							nGridCol = objGrid.getBindCellIndex( 'body', colnm );
						}
					}
				}
				
				break;
		}
	}
	
	if(this.gfnIsNull(msg)) {
		return true;
	}
	else {
		var arrError = [msg];
		this.gfnAlert("msg.err.validator", arrError, 'alert_validator', function(){
			objGrid.setFocus();
			objGrid.setCellPos(nGridCol, nGridRow);
			objGrid.selectCell( nGridRow, nGridCol, true );
		});
		return false;
	}
};

/*
 *	그리드 데이터 클리어, 기타 초기화
 */ 
pForm.gfnGridClear = function(objGrid) {
	objGrid.oldrow = null;
	objGrid.oldcell = null;
	var objDs = objGrid.getBindDataset();
	objDs.clearData();
};

/*
 *	조회전 현재 선택 로우 저장
 */ 
pForm.gfnGridBeforeSelect = function(objGrid) {
// 	var objDs = objGrid.getBindDataset();
// 	objDs.set_filterstr("");
	if(this.gfnIsNull(objGrid.oldrow)) {
		objGrid.oldrow = -1;
	} else {
		if(objGrid.IsTree) {
			objGrid.oldrow = objGrid.getDatasetRow(objGrid.currentrow);
		} else {
			objGrid.oldrow = objGrid.currentrow;
		}
	}
	
	if (this.gfnIsNull(objGrid.oldcell)) {
		objGrid.oldcell = -1;
	} else {
		objGrid.oldcell = objGrid.currentcell;
	}
};

/*
 *	조회 후 그리드 이전 로우 선택
 */ 
pForm.gfnGridAfterSelect = function(objGrid) {	
/*
	if (objGrid.oldrow > -1) {
		if(objGrid.setCellPos(objGrid.oldcell, objGrid.oldrow) == false) {
			objGrid.oldrow = -1;
		}
	}
*/
	if (objGrid.oldrow == -1) {
		objGrid.oldrow = 0;
	}
	
	if (objGrid.oldcell == -1) {
		objGrid.oldcell = 0;
	}
	
	if (!objGrid.setCellPos(objGrid.oldcell, objGrid.oldrow)) {
		objGrid.oldrow = -1;
	} else {
		objGrid.setFocus();
	}
};

/************************************************************************
 * 넥사크로 제공 그리드 기능
 ************************************************************************/
//grid propertiy
pForm.defaultmenulis = "colfix,sort,filter,initial";
pForm.selectmenulist = "checkbox,no,status,replace,colhide,export,import,cellcopypaste";
pForm.popupmenulist = "colfix,filter,initial,replace,colhide,export,import";
//소트
// 헤더 클릭시 정렬 false= 오름/내림 true= 오름/내림/없음
pForm.SORT_TOGGLE_CANCEL = true;
pForm.MARKER_TYPE = "text"; // 정렬 표시자 구분 (text or image)
// Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정 
pForm.MARKER = ["▲", "▼"];// [오름차순표시, 내림차순표시]
//cell copy and paste 시 chorme용 textarea 저장 object
pForm.tragetGrid = "";

/**
 * @class Grid에 기능 추가
 * @param {Object} obj	- 대상그리드
 * @return N/A
 * @example
 * this.gfnSetGrid(this.grdMain);	
*/
pForm.gfnSetGrid = function(objGrid)
{
	if(objGrid._set_grid == true) return;
	
	//Grid의 binddataset설정
	//var objDs = objGrid.getBindDataset();

	// grid에 바인드된 Dataset이 없는 경우 return;
// 	if (this.gfnIsNull(objDs)) {
// 		return;
// 	}
// 	// Validation에서 foucus 처리시 사용
// 	else {
// 		objDs.bindgrid = objGrid;
// 	}
	
	//Grid의 UserProperty설정
// 	var arrProp = this._getGridUserProperty(objGrid);
// 	if(this.gfnIsNull(arrProp)) return; 
	
	objGrid.set_enableevent(false);
	objGrid.set_enableredraw(false);	
	//objDs.set_enableevent(false); 
	
	//objGrid.orgformat2 = objGrid.getFormatString();
	
	//objGrid.arrprop = arrProp;
	//this._gfnGridAddProp(objGrid);
	
	this._gfnMakeGridPopupMenu(objGrid);//popupmenu 생성
	/*********************************************** 이벤트추가 START ***********************************************/
	
	objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this); 	//헤드클릭이벤트추가
	objGrid.addEventHandler("onheaddblclick", this.gfnGrid_onheaddblclick, this);
	//objGrid.addEventHandler("onkeydown", this.gfnGrid_onkeydown, this);
	objGrid.addEventHandler("onrbuttondown", this.gfnGrid_onrbuttondown, this);	    
// 	for( var k=0; k< arrProp.length; k++){
// 		var arr = this.popupmenulist.split(",");
// 		for( var n=0; n<arr.length; n++){
// 			if( arrProp[k] == arr[n]){
// 				//우클릭 이벤트 중 하나라도 있어야 팝업 이벤트 사용 가능
// 				//우클릭이벤트추가
// 				objGrid.addEventHandler("onrbuttondown", this.gfnGrid_onrbuttondown, this);	    
// 				break;
// 			}
// 		}
// 		if( arrProp[k] == "cellcopypaste"){
// 			objGrid.addEventHandler("onkeydown", this.gfnGrid_onkeydown, this);
// 		}
// 	}
	/*********************************************** 이벤트추가 END *************************************************/
	objGrid.set_enableevent(true);
	objGrid.set_enableredraw(true);	
	//objDs.set_enableevent(true);
	//objGrid.orgformat = objGrid.getCurFormatString();
	objGrid._set_grid = true;
};	

/**
 * @class Grid에 기능 추가(addCol..)
 * @param {Object} objGrid	- 대상그리드
 * @return N/A
 * @example
 * this._gfnGridAddProp(this.grdMain);	
*/
pForm._gfnGridAddProp = function (objGrid)
{
	var arrProp = objGrid.arrprop;
	var objDs = objGrid.getBindDataset();
	for( var i=0; i<arrProp.length; i++)
	{
		switch(arrProp[i]) {
			case "checkbox":
				this._gfnGridCheckboxNoStatusAdd(objGrid, objDs, "checkbox");
				break;
			case "no":
				this._gfnGridCheckboxNoStatusAdd(objGrid, objDs, "no");
				break;
			case "status":
				this._gfnGridCheckboxNoStatusAdd(objGrid, objDs, "status");
				break;
			case "sort":
				objGrid.sort = "true";
				break;
			default: break;
		}
	}
	
};

/**
 * @class Grid에 기능 추가(addCol..)
 * @param {Object} objGrid	- 대상그리드
 * @param {Object} objDs	- 대상데이터셋
 * @param {Array} addProp	- 기능
 * @return N/A
 * @example
 * this._gfnGridCheckboxNoStatusAdd(this.grdMain, this.dsList, [checkbox,no,status]);	
*/
pForm._gfnGridCheckboxNoStatusAdd = function (objGrid, objDs, addProp)
{	
	var nHeadColIndex;
	if(this.gfnIsNull(objDs.insertheadcell)) nHeadColIndex = 0;
	else nHeadColIndex = objDs.insertheadcell;	

	var nBodyColIndex;
	if(this.gfnIsNull(objDs.insertbodycell)) nBodyColIndex = 0;
	else nBodyColIndex = objDs.insertbodycell;
	
	var nFormatRowCount = objGrid.getFormatRowCount();
	var nHeadCount=-1;
	var nBodyCount=-1;
	for (var i=0; i<nFormatRowCount; i++)
	{
		if (objGrid.getFormatRowProperty(i, "band") == "head") nHeadCount++;
		if (objGrid.getFormatRowProperty(i, "band") == "body") nBodyCount++;
	}

	var sNo = "순번";
	var sStatus = "상태";

	//체크박스
	if( addProp == "checkbox")
	{
		objDs.set_enableevent(false); 
		var idx=-1;
		for( var j=0; j<objDs.getColCount(); j++){
			var tmpcol = objDs.getColID(j);
			if( tmpcol == "gridcmmcheck"){
				idx = j;
			}
		}
		if( idx < 0 ) objDs.addColumn("gridcmmcheck", "STRING", 1);
		
		
		for( var i=0; i<objGrid.getCellCount("head"); i++){
			//헤드텍스트
			var tmp = objGrid.getCellProperty("head" , i, "text");
			if( tmp == "0"){
				// head cell index 에 해당하는 body cell index
				var bodyCellIndex = this._gfnGridGetBodyCellIndex(objGrid, i);
				// body cell index 에 해당하는 바인드 컬럼명
				var columnName = this._gfnGridGetBindColumnNameByIndex(objGrid, bodyCellIndex);
				if(columnName == "gridcmmcheck") {
					//return;
					objGrid.deleteContentsCol("body", i);
				}
			}
		}
		objGrid.insertContentsCol(nBodyColIndex);			
		objGrid.setFormatColProperty(nBodyColIndex, "size", "40");	
		objGrid.setCellProperty("head", nHeadColIndex, "displaytype", "checkboxcontrol");
		objGrid.setCellProperty("head", nHeadColIndex, "edittype", "checkbox");
		objGrid.setCellProperty("head", nHeadColIndex, "text", "0");
		objGrid.setCellProperty("body", nBodyColIndex, "displaytype", "checkboxcontrol");
		objGrid.setCellProperty("body", nBodyColIndex, "edittype", "checkbox");
		objGrid.setCellProperty("body", nBodyColIndex, "text", "bind:gridcmmcheck");
		
		objGrid.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);	
		objGrid.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);		
		
		nHeadColIndex++;
 		nBodyColIndex++;
	}
	//번호
	if( addProp == "no")
	{
		for( var i=0; i<objGrid.getCellCount("head"); i++){
			var tmp = objGrid.getCellProperty("head" , i, "text");
			if( tmp == "NO" || tmp == "순번"){
				//return;
				objGrid.deleteContentsCol("body", i);
			}
		}
		objGrid.insertContentsCol(nBodyColIndex);	
		objGrid.setFormatColProperty(nBodyColIndex, "size", "50");	
 		objGrid.setCellProperty("head", nHeadColIndex, "text", sNo);	
		objGrid.setCellProperty("head", nHeadColIndex, "textAlign","center");
		objGrid.setCellProperty("body", nBodyColIndex, "text","expr:currow+1");
		objGrid.setCellProperty("body", nBodyColIndex, "textAlign","center");
		objGrid.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);	
		objGrid.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);			
		
		nHeadColIndex++;
 		nBodyColIndex++;
	}
	//상태
	if ( addProp == "status")
	{
		for( var i=0; i<objGrid.getCellCount("head"); i++){
			var tmp = objGrid.getCellProperty("head" , i, "text");
			if( tmp == "상태" || tmp == "Status"){
				//return;
				objGrid.deleteContentsCol("body", i);
			}
		}
		
		var sInsert = nexacro.wrapQuote("입력");
		var sUpdate = nexacro.wrapQuote("수정");
		var sDelete = nexacro.wrapQuote("삭제");
		var sExpr = "expr:"
				  + "dataset.getRowType(currow)==2?"+sInsert
				  + ":dataset.getRowType(currow)==4?"+sUpdate
				  + ":dataset.getRowType(currow)==8?"+sDelete
				  + ":''";
		
		var nSize = 50;
		
		objGrid.insertContentsCol(nBodyColIndex);	
		objGrid.setFormatColProperty(nBodyColIndex, "size", nSize);	
		objGrid.setCellProperty("head", nHeadColIndex, "text", sStatus);	
		objGrid.setCellProperty("head", nHeadColIndex, "textAlign","center");
		objGrid.setCellProperty("body", nBodyColIndex, "displaytype", "expr:dataset.getRowType(currow) != 1 ? 'text' : ''");
		objGrid.setCellProperty("body", nBodyColIndex, "text", sExpr);		
		objGrid.setCellProperty("body", nBodyColIndex, "textAlign","center");
		objGrid.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);	
		objGrid.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);			
		
		nHeadColIndex++;
 		nBodyColIndex++;
	}	
};

/**
 * @class  그리드헤드클릭 이벤트 [Sort, Checkbox]
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 헤드클릭이벤트
 * @return  N/A
 * @example
 * objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
 */
pForm.gfnGrid_onheadclick = function(objGrid, e)
{
// 	if (objGrid.headblock == true) {
// 		objGrid.headblock = false;
// 		return;
// 	}
	if (objGrid._filterliston) {
		this._gfnGridFilterList(objGrid, e);
		return;
	}
	if (objGrid._cursor == "ew-resize" || objGrid._cursor == "col-resize") {
		return;
	}
	var sType = objGrid.getCellProperty("head", e.cell, "displaytype");
	if (sType == "checkboxcontrol"){
		//head display type이 checkbox일 경우 all/none check기능추가
		this._gfnHeadCheckSelectAll(objGrid, e);
	}else{
		//sort
		if(objGrid.sort=="false" || objGrid.sort == false){
			return;
		} else {
			var arr = objGrid.arrprop;
			var multiple = false;
			if ( e.ctrlkey ) multiple = true;// Ctrl 키
				// 정렬 상태 변경이 성공하면 정렬을 실행한다.
			var rtn = this._gfnGridSetSortStatus(objGrid, e.cell, multiple);
			if(rtn){
				var org_selecttype = objGrid.selecttype;
				
				// multiarea일때 로우 커서 위치가 안맞음
				objGrid.set_selecttype("cell");
				this._gfnGridExecuteSort(objGrid);
				objGrid.set_selecttype(org_selecttype);
			}
		}
	}
};

pForm.gfnGrid_onheaddblclick = function(obj,e) {
	if (obj._resizer_colctrl != null && (obj._cursor == "ew-resize" || obj._cursor == "col-resize")) {
		var bcell = this._gfnGridGetBodyCellIndex(obj, obj._resizer_colctrl._index);
		if(bcell > -1) {
			obj.autoSizeCol("body", bcell);
		}
	}
};

pForm._gfnGridFilterList = function(objGrid, e) {
	var objDs = objGrid.getBindDataset();
	var objApp = pForm.gfnGetApplication();
		
	// head cell index 에 해당하는 body cell index
	var bodyCellIndex = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
	if ( bodyCellIndex < 0 ) return false;
	
	// body cell index 에 해당하는 바인드 컬럼명
	var colnm = this._gfnGridGetBindColumnNameByIndex(objGrid, bodyCellIndex);
	if ( this.gfnIsNull(colnm) ){
		//trace("Check Grid body cell bind value");
		return false;
	}
	
	// 콤보 code/text 가져오기
	var isComboData = false;
	var comboKeyCheck = {};
	var combodatasetID = objGrid.getCellProperty( "body", bodyCellIndex, "combodataset");
	if(!this.gfnIsNull(combodatasetID)) {
		if(this[combodatasetID] != null) {
			var objComboDs = this[combodatasetID];
			if(objComboDs.colinfos["CODE"] != null && objComboDs.colinfos["TEXT"] != null) {
				isComboData = true;
				for (var c=0; c<objComboDs.rowcount; c++) {
					var code = objComboDs.getColumn(c, "CODE");
					var text = objComboDs.getColumn(c, "TEXT");
					comboKeyCheck[code] = text;
				}
			}
		}
	}
	
	var arr_list = [];
	var arr_list_all = [];
	var arr_list_combo = [];
	var arr_list_combo_all = [];
	var sDatasetId = JSON.stringify({ ID: "ds_filterlist", Row: e.row, Cell: e.cell, Col: colnm });
	var arrColList = [];
	arrColList.push("value:" + colnm);
	var dsFilter = objDs.createDataset(sDatasetId, arrColList);
	var dsFilterAll = objDs.createDatasetNF(sDatasetId, arrColList);
	
	var cnt = dsFilter.rowcount;
	//if(cnt > 100) cnt = 100;
	var keyCheck = {};
	for (var i = 0; i < cnt; i++) {
		if(dsFilter.getColumn(i, "value") == null) continue;
		var orgval = dsFilter.getColumn(i, "value");
		var val = String(orgval).replace(/\s/g, '');
		if(orgval instanceof nexacro.Decimal) {
			orgval = Number(orgval);
		}
		
		if(!this.gfnIsNull(val) && keyCheck[orgval] == null) {
			keyCheck[orgval] = "";			
			arr_list.push(orgval);
			
			if(isComboData) {
				if(comboKeyCheck[orgval]==null) {
					arr_list_combo.push(orgval);
				} else {
					arr_list_combo.push(comboKeyCheck[orgval]);
				}
			}
		}
	}	
	keyCheck = {};
	
	cnt = dsFilterAll.rowcount;
	for (var i = 0; i < cnt; i++) {
		if(dsFilterAll.getColumn(i, "value") == null) continue;
		var orgval = dsFilterAll.getColumn(i, "value");
		var val = String(orgval).replace(/\s/g, '');
		if(orgval instanceof nexacro.Decimal) {
			orgval = Number(orgval);
		}
		
		if(!this.gfnIsNull(val) && keyCheck[orgval] == null) {
			keyCheck[orgval] = "";
			arr_list_all.push(orgval);
			
			if(isComboData) {
				if(comboKeyCheck[orgval]==null) {
					arr_list_combo_all.push(orgval);
				} else {
					arr_list_combo_all.push(comboKeyCheck[orgval]);
				}
			}
		}
	}	
	keyCheck = {};
	comboKeyCheck = {};
	
	if(this.gfnIsNull(objGrid.usFilterList)) {
		objGrid.usFilterList = {};
	}
	if(objGrid.usFilterList[colnm]==null) {
		objGrid.usFilterList[colnm] = [];
	}
	
	var cr = objGrid.getCellRect(e.row, e.cell);  
	var width = cr.width;
	if(width < 200) width = 200;
	var sPopupId = JSON.stringify({ ID: "grd_filterlist", Row: e.row, Cell: e.cell, Col: colnm });
	var popdiv = new PopupDiv();
	popdiv.set_url("cmm::cmmFilterList.xfdl");
	//popdiv.set_initvalueid(val);
	popdiv.init(sPopupId,0,0,width,300,null,null);
	var comp = this.gfnLookup(this, sPopupId);
	if(comp != null) {
		comp.destroy();
	}
	this.addChild(sPopupId, popdiv);
	popdiv.pvFilterArray = arr_list;
	popdiv.pvFilterArrayAll = arr_list_all;
	popdiv.pvFilterArrayCombo = arr_list_combo;
	popdiv.pvFilterArrayComboAll = arr_list_combo_all;
	popdiv.pvFilterList = objGrid.usFilterList[colnm];
	popdiv.show();	
	
	var objCell = objGrid._getCurrentHeadCell(e.cell, true);
	var relY = objGrid.getRealRowSize(-1) - objCell.top - 1;
	var objXY = this.gfnConvertXY(this, [-1,relY], objCell);
	
	this.fvGridInfo = objGrid;
	objGrid.IsOnBlock = true;
	popdiv.trackPopupByComponent(this, objXY[0], objXY[1], null, null, "_grd_onfilterlist");
}

pForm._grd_onfilterlist = function(strId, val)
{
	var objGrid = this.fvGridInfo;
	objGrid.IsOnBlock = false;
	if(!this.gfnIsNull(val)) {
		var objDs = objGrid.getBindDataset();
		var popInfo = JSON.parse(strId);
		this.removeChild(strId);
		
		var cell = popInfo.Cell;
		var col = popInfo.Col;
		
		var objCell = objGrid._getCurrentHeadCell(cell, true);
		var arr_chk = JSON.parse(val);
		objGrid.usFilterList[col] = arr_chk;
		
		var usFilter = objGrid.usFilterOr;
		if(this.gfnIsNull(usFilter)) {
			usFilter = {};
		}
		usFilter[col] = [];
		
		for(var i = 0; i < arr_chk.length; i++) {
			usFilter[col].push({CD_FIELD: col, VALUE: arr_chk[i], TYPE: 'F'});
		}
		objGrid.usFilterOr = usFilter;
		
		this._dataset_filter_row_apply(objDs, false);
		
		var cellCSS = objGrid.getCellProperty("head",cell,"cssclass");
			if (arr_chk.length>0) {
				if(cellCSS.indexOf("selfilter") == -1) {
					if(this.gfnIsNull(cellCSS)) {
						cellCSS = "selfilter";
					} else {
						cellCSS += " selfilter";
					}
					objGrid.setCellProperty("head",cell,"cssclass", cellCSS);
				}
			} else {
				objGrid.setCellProperty("head",cell,"cssclass", cellCSS.replace(" selfilter", "").replace("selfilter", ""));
			}
	}
	
	var bl_Filterlist = document.getElementsByClassName('filterlist');
	for (let i = 0; i < bl_Filterlist.length; i++) {
       bl_Filterlist[i].style.display = 'none';
    }
	
	var bl_Selfilter = document.getElementsByClassName('selfilter');
	for (let i = 0; i < bl_Selfilter.length; i++) {
       bl_Selfilter[i].children[1].style.display = 'block';
    }
	
};

/**
 * @class  그리드키다운 이벤트 [cellcopypaste]
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 키다운이벤트
 * @return  N/A
 * @example
 * objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
 */
pForm.gfnGrid_onkeydown =function(objGrid, e){
	
	var keycode = e.keycode;
	var sBrowser = system.navigatorname;
	if(e.ctrlkey){
		if(keycode == 67){
			//copy
			if( sBrowser == "nexacro" || (sBrowser == "IE" && nexacro._BrowserType != "Edge")){
				this._gfnGridCopyEventForRuntime(objGrid, e);
			}else {
				this._gfnGridCopyEventForChrome(objGrid, e);
			}
		}else if(keycode == 86){
			//paste
			this._gfnGridPasteEvent(objGrid, e);
		}
	}
};

/**
 * @class 정렬가능여부리턴
 * @param {Object} grid - 대상그리드
 * @param {Number} headCellIndex - 대상셀INDEX
 * @param {Boolean}multiple - 멀티소트여부 
 * @param {Number} sortStatus - 소트상태  
 * @return{Boolean} sort 가능/불가능 여부
 * @example
 * this._gfnGridSetSortStatus(obj, e.cell, multiple);	
 */
pForm._gfnGridSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus, bodyCellIndex)
{
	// head cell index 에 해당하는 body cell index
	if( this.gfnIsNull(bodyCellIndex)){
		bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, headCellIndex);
	}
	if ( bodyCellIndex < 0 ) return false;
	
	// body cell index 에 해당하는 바인드 컬럼명
	var columnName = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);
	if ( this.gfnIsNull(columnName) ){
		trace("Check Grid body cell bind value");
		return false;
	}
	
	if ( this.gfnIsNull(isMultiple) ) isMultiple = false;
	if ( this.gfnIsNull(sortStatus) ) sortStatus = -1;
	
	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
	if ( this.gfnIsNull(grid.sortInfos) ){
		grid.sortInfos = {};
	}
	
	// 정렬대상컬럼 (순서중요)
	if ( this.gfnIsNull(grid.sortItems) ){
		grid.sortItems = [];
	}
	
	var sortInfos = grid.sortInfos,
		sortItems = grid.sortItems,
		sortInfo = sortInfos[columnName],
		sortItem,
		status;
	
	if ( this.gfnIsNull(sortInfo) )
	{
		var headText = grid.getCellText(-1, headCellIndex);
		
		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
		var refCell = this._gfnGridGetGridCellObject(grid, "head", headCellIndex);
		sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
	}
	// set sort status
	if ( isMultiple ) {		
		status = sortInfo.status;
		if ( sortStatus == -1 ) {
			if ( status == 0 ) {
				sortInfo.status = 1;
			} 
			else if ( status == 1 ) {
				sortInfo.status = 2;
			} 
			else if ( status == 2 ) {
				sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
			}
		}
		else {
			sortInfo.status = sortStatus;
		}
	}else {
		for (var p in sortInfos) {
			if ( sortInfos.hasOwnProperty(p) )
			{
				sortInfo = sortInfos[p];
				if ( p == columnName ) {
					status = sortInfo.status;
					if ( sortStatus == -1 ) {
						if ( status == 0 ) {
							sortInfo.status = 1;
						} 
						else if ( status == 1 ) {
							sortInfo.status = 2;
						} 
						else if ( status == 2) {
							sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
						}
					}else {
						sortInfo.status = sortStatus;
					}
				}else {
					sortInfo.status = 0;
				}
				if ( sortInfo.status == 0 ){
					for (var j=0, len2=sortItems.length; j<len2; j++) {
						if ( sortItems[j] !== columnName ) {
							sortItems.splice(j, 1);
							break;
						}
					}
				}
			}
		}
	}
	
	// 컬럼정보 등록
	var hasItem = false;
	for (var i=0, len=sortItems.length; i<len; i++) {
		if ( sortItems[i] == columnName ) {
			hasItem = true;
			break;
		}
	}	
	if ( !hasItem ){
		sortItems.push(columnName);
	}
	return true;
}; 

/**
 * @class head cell에 match되는 body cell을 얻어온다
 * @param {Object}  grid 대상 Grid Component
 * @param {Number} eadCellIndex head cell index
 * @return{Number}  body cell index
 * @example
 * this._gfnGridSetSortStatus(obj, e.cell, multiple);	
 */ 
pForm._gfnGridGetBodyCellIndex = function(grid, headCellIndex, useColspan) 
{	//, useColspan) 
	if( this.gfnIsNull(useColspan)) useColspan=false;
	// Max Head Row Index
	var maxHeadRow = 0;
	for (var i=0, len=grid.getCellCount("head"); i<len; i++) {
		var row = grid.getCellProperty("head", i, "row");
		if (maxHeadRow < row) {
			maxHeadRow = row;
		}
	}
	// Max Body Row Index
	var maxBodyRow = 0;
	for (var i=0, len=grid.getCellCount("body"); i<len; i++) {
		var row = grid.getCellProperty("body", i, "row");
		if (maxBodyRow < row) {
			maxBodyRow = row;
		}
	}
	
	if (maxHeadRow == 0 && maxBodyRow == 0) {
// 		var headcolspan = grid.getCellProperty("head", headCellIndex, "colspan");
// 		var bodycolspan = grid.getCellProperty("body", headCellIndex, "colspan");
// 		
// 		if( headcolspan == bodycolspan ){
// 			return headCellIndex;
// 		}
		useColspan = true;
	}
	
	// Body Row 가 1개 이상일 경우
	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
	var cellIndex = -1;
	var sRow = -1;
	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));				
	
	if (maxHeadRow > maxBodyRow) 
	{
		sRow = nRow - (maxHeadRow - maxBodyRow);
		sRow = (sRow < 0 ? 0 : sRow);
	}
	else 
	{
		sRow = nRow;
	}
	var cRow, cCol, cColspan, cRowspan;
	for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
	{
		cRow = parseInt(grid.getCellProperty("body", i, "row"));
		cCol = parseInt(grid.getCellProperty("body", i, "col"));	
		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));					
		cRowspan = parseInt(grid.getCellProperty("body", i, "rowspan"));
		if( cRowspan > 1 )
		{
			if ( useColspan ){
				if (sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}else{
				if (sRow >= cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}else{	
			if ( useColspan ){
				if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}else{
				if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}
	}
	return cellIndex;
};

/**
 * @class body cell index로 binding 된 컬럼명을 얻어온다.
 * @param {Object}  grid 대상 Grid Component
 * @param {Number} eadCellIndex head cell index
 * @return{String} column id
 * @example
 * this._gfnGridGetBindColumnNameByIndex(obj, e.cell);	
 */  
pForm.gfnGridGetBindColumnNameByIndex = function(grid, index) 
{
	return this._gfnGridGetBindColumnNameByIndex(grid, index);
};
pForm._gfnGridGetBindColumnNameByIndex = function(grid, index) 
{
	var text = "";
	var columnid = "";
	var subCell = grid.getCellProperty("body", index, "subcell");
	if ( subCell > 0 ){
		text = grid.getSubCellProperty("body", index, 0, "text");
	}
	else{
		text = grid.getCellProperty("body", index, "text");
	}
	
	if ( !this.gfnIsNull(text) ){
		if ( text.search(/^BIND\(/) > -1 ) {	
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} 
		else if ( text.search(/^bind:/) > -1 ) {
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
};

pForm._gfnGridGetBindColumnNameByIndex2 = function(grid, index) 
{
	var text = "";
	var columnid = "";
	var subCell = grid.getCellProperty("body", index, "subcell");
	if ( subCell > 0 ){
		text = grid.getSubCellProperty("body", index, 0, "text");
	}
	else{
		text = grid.getCellProperty("body", index, "text");
	}
	
	if ( !this.gfnIsNull(text) ){
		if ( text.search(/^BIND\(/) > -1 ) {	
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} 
		else if ( text.search(/^bind:/) > -1 ) {
			columnid = text.replace(/^bind:/, "");
		}
		else if (text.startsWith("expr:nx_flag")) {
			columnid = "nx_flag";
		}
	}
	return columnid;
};

/**
 * @class 소트를 실행한다
 * @param {Object}  grid 대상 Grid Component
 * @return{String}  N/A
 * @example
 * this._gfnGridExecuteSort(obj);	
 */  
pForm._gfnGridExecuteSort = function(grid) 
{
	var sortInfo, 
		sortItem,
		sortInfos = grid.sortInfos,
		sortItems = grid.sortItems,
		columnName,
		status,
		cell,
		sortString = "-nx_sort";
		
	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;

	// keystring 조합
	
	var objGroupPanel = grid.grouppanel;
	var arr_col = [];
	var arr_nm = [];
	var arr_ref = [];
	if (!this.gfnIsNull(objGroupPanel) && !this.gfnIsNull(objGroupPanel.col_group)) {
		arr_col = objGroupPanel.col_group;
		arr_nm = objGroupPanel.col_name;
		arr_ref = objGroupPanel.col_ref;
	}
	
	for (var i=0; i<sortItems.length; i++) {
		columnName = sortItems[i];
		sortInfo = sortInfos[columnName];
		status = sortInfo.status;
		cell = sortInfo.refCell;
		
		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
		// 확인하여 없으면 제거해 준다.
		if ( this.gfnIsNull(cell) || grid.getBindCellIndex("body", columnName) < 0 ){
			// 컬럼정보제거
			sortItems.splice(i, 1);
			sortInfos[columnName] = null;
			delete sortInfos[columnName];
			
			i--;
		}else if ( status > 0 ) {			
			sortString += (status == 1 ? "+" : "-") + columnName;
		}
	}
	
	var ds = grid.getBindDataset();
	// keystring 확인
	var curKeyString = ds.keystring;
	var groupKeyString = "";
	
	if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 ){
		var sIndex = curKeyString.indexOf("S:");
		var gIndex = curKeyString.indexOf("G:");

		if ( sIndex > -1 ){
			groupKeyString = "";
		}else{
			if ( gIndex < 0 )
			{
				groupKeyString = "G:"+curKeyString;
			}
			else
			{
				groupKeyString = curKeyString;
			}
		}
	}else{
		if(curKeyString.indexOf("G:") > -1) {
			var temps = curKeyString.substring(curKeyString.indexOf("G:")+2);
			if(temps.indexOf(",S:") > -1) {
				temps = temps.substring(0, temps.indexOf(",S:"));
			}
			var sKeyString = "";
			if(temps.startsWith("-nx_sort")) {
				sKeyString = "-nx_sort";
				temps = temps.replace("-nx_sort", "");
			}
			var spl_tmp = temps.split(',');
			for(var g=0;g<spl_tmp.length;g++) {
				var colnm = spl_tmp[g].replace("+","").replace("-","");
				if(sortInfos[colnm] != null) {
					var status = "";
					var s = sortInfos[colnm].status;
					if(s>0) {
						if(s==1) {
							status = "+";
						} else {
							status = "-";
						}
					}
					if(g==0) sKeyString += (status==""?"+":status)+colnm;
					else sKeyString += "," + status + colnm;
				} else {
					if(sKeyString == "-nx_sort") {
						sKeyString += spl_tmp[g];
					} else {
						if(g==0) sKeyString += spl_tmp[g];
						else sKeyString += "," + spl_tmp[g];
					}
				}
			}
			groupKeyString = "G:"+sKeyString;
		}
// 		var temps = curKeyString.split(",");
// 		var temp;
// 		for (var i=0,len=temps.length; i<len; i++){
// 			temp = temps[i];
// 			if ( temp.length > 0 && temp.indexOf("S:") < 0 ){
// 				if ( temp.indexOf("G:") < 0 )
// 				{
// 					groupKeyString = "G:"+temp;
// 				}else{
// 					groupKeyString = temp;
// 				}
// 			}
// 		}
	}

	var sortKeyString = "S:-nx_sort"+sortString;
	if ( groupKeyString.length > 0 ){
		ds.set_keystring(groupKeyString + "," + sortKeyString);
	} else{
		ds.set_keystring(sortKeyString);
	}	
	grid.sortKeyString = sortKeyString;	
	
	// 정렬표시
	var type = this.MARKER_TYPE;
	var index, marker;
	for (var p in sortInfos) {
		if ( sortInfos.hasOwnProperty(p) )
		{
			sortInfo = sortInfos[p];			
			cell = sortInfo.refCell;
			if ( cell )
			{
				index = cell._cellidx;
				marker = this.gfnDecode(sortInfo.status, 1, this.MARKER[0], 2, this.MARKER[1], "");
				grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
			}
		}
	}

	var objForm = this;
	this.gfnSetTimer(objForm, function() {
		this._grd_head_onmouseover(grid, objForm);
	}, 700);
};

/**
 * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
 * @param {Grid} grid 대상 Grid Component
 * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
 * @param {number} index 얻고자 하는 cell 의 index
 * @return {object} cell object
 */
pForm._gfnGridGetGridCellObject = function(grid, band, index)
{
	// 내부속성을 통해 얻어온다.
	var refCell;
	var format = grid._curFormat;
	if (format){
		if ( band == "head" ){
			refCell = format._headcells[index];
		}
		else if ( band == "body" ){
			refCell = format._bodycells[index];
		}
		else if ( band == "summ" || band == "summary" ){
			refCell = format._summcells[index];
		}
	}
	return refCell;
};

/**
 * @class 그리드의 Sort Mark 제거
 * @param {Object} Grid 대상그리드
 * @return N/A
 */  
pForm._gfnClearSortMark = function(obj)
{
	var sortInfos = obj.sortInfos;
	var sortItems = obj.sortItems;
	
	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;
	
	// 정렬상태 초기화.
	for( var j=0; j<sortItems.length;j++){
		var col = sortItems[j];
		var sortInfo = sortInfos[col];
		sortInfo.status = 0;
	}
	
	// 정렬실행
	this._gfnGridExecuteSort(obj);
	
	// 정보 초기화
	obj.sortInfos = {};
	obj.sortItems = [];
};

pForm._gfnGridTreeOpenAll = function(objGrid, row) {
	if(objGrid.IsTree && objGrid.rowcount > 0 && row > -1) {
		var objDs = objGrid.getBindDataset();	
		
		var tree_level_column = objGrid.tree_level_column;
		
		objGrid.set_enableredraw(false);
		if (tree_level_column == "#GROUP#") {
			// 그룹핑 트리는 reversesubsum 이므로 역순으로 계산
			var level = objDs.getRowLevel(row);
			var stoploop = false;
			for(var i = row; i < objDs.rowcount; i++) {
				var grow = objGrid.getTreeRow(i);
				var curlevel = objDs.getRowLevel(i);
				if(curlevel == level) {
					if (stoploop == true) {
						break;
					} else {
						stoploop = true;
					}
				}
				
				if (curlevel <= level) {					
					if(objGrid.getTreeStatus(grow) == 0) {
						objGrid.setTreeStatus(grow, true);
					}					
				} 
			}
		} else {
			var tree_max_level = objDs.getMax(tree_level_column);
			var level = objDs.getColumn(row, tree_level_column);
			var next_row = objGrid.getTreeSiblingRow(row,1);
			for(var i = level; i < tree_max_level; i++) {
				var frow = objDs.findRow(tree_level_column, i, row, next_row);
				while(frow > -1) {
					objGrid.setTreeStatus(objGrid.getTreeRow(frow), true);
					frow++;
					frow = objDs.findRow(tree_level_column, i, frow, next_row);
				}
			}
		}
		objGrid.set_enableredraw(true);
	}
};

pForm._gfnGridTreeOpen = function(objGrid, userData) {
	if(objGrid.IsTree && objGrid.rowcount > 0) {
		var objDs = objGrid.getBindDataset();
		
		var level = nexacro.toNumber(userData);
		var tree_level_column = objGrid.tree_level_column;
		
		objGrid.set_enableredraw(false);
		if (tree_level_column == "#GROUP#") {
			// 그룹핑 트리는 reversesubsum 이므로 역순으로 계산
			var tree_max_level = objDs.treecolumnlist.length+1;
			if(level > tree_max_level) {
				level = tree_max_level;
			}
			for(var i = 0; i < objDs.rowcount; i++) {
				var grow = objGrid.getTreeRow(i);
				if((tree_max_level-objDs.getRowLevel(i)) < level) {
					if(objGrid.getTreeStatus(grow) == 0) {
						objGrid.setTreeStatus(grow, true);
					}
				} else {
					if(objGrid.getTreeStatus(grow) == 1) {
						objGrid.setTreeStatus(grow, false);
					}
				}
			}
		} else {
			var tree_max_level = objDs.getMax(tree_level_column);
			
			if(level > tree_max_level) {
				level = tree_max_level;
			}

			for(var x = (tree_max_level - 1); x >= level; x--) {
				var frow = objDs.findRow(tree_level_column, x);
				while(frow > -1) {
					objGrid.setTreeStatus(objGrid.getTreeRow(frow), false);
					frow++;
					frow = objDs.findRow(tree_level_column, x, frow);
				}
			}
			for(var i = 0; i < level; i++) {
				var frow = objDs.findRow(tree_level_column, i);
				while(frow > -1) {
					objGrid.setTreeStatus(objGrid.getTreeRow(frow), true);
					frow++;
					frow = objDs.findRow(tree_level_column, i, frow);
				}
			}
		}
		objGrid.set_enableredraw(true);
	}
	
};

pForm._gfnGridLayoutSet = function(id, xml) {
	if(xml != null) {
		var ds = new Dataset();
		ds.loadXML(xml);
		this._grd_layout(this, this._layoutset_grid, ds, true);
		this._layoutset_grid = null;
	}
}

pForm._gfnGridLayout = function(objMenu, objGrid, userData) {
	var objDs = objGrid.getBindDataset();	
	if(objGrid.ID_GRID != userData) {
		var dsMenu = objMenu.getInnerDataset();
		var frow = dsMenu.findRow("userdata", objGrid.ID_GRID);
		if(frow > -1) {
			dsMenu.setColumn(frow, "caption", dsMenu.getColumn(frow, "caption").replace("▶ ",""));
		}
		frow = dsMenu.findRow("userdata", userData);
		dsMenu.setColumn(frow, "caption", "▶ "+dsMenu.getColumn(frow, "caption"));

		objGrid._dsKeyString = "";
		objDs.set_keystring("");
		
		objGrid.AfterLoad = "_gfnGridLayout_AfterLoad";
		this.gfnGridInitAsync(objGrid, objDs, objGrid.CD_SYSTEM, userData);
	}
}

pForm._gfnGridLayout_AfterLoad = function(objGrid, objDs) {
	objGrid.AfterLoad = null;
	this._dataset_onload(objDs,null);
}

/**
 * @class  마우스우클릭이벤트
 * @param  {Object} objGrid	- 대상그리드
 * @param  {Event}  e		- 우클릭이벤트 
 * @return  N/A
 * @example
 * this._gfnGetHeadBodyIndex(this.grdMain, this.dsMain);	
 */
pForm.gfnGrid_onrbuttondown = function (objGrid, e)
{
	var objApp = pForm.gfnGetApplication();
	
// 	if(e.row == -1) {
// 		this._gfnGridFilterList(objGrid, e);
// 		return;
// 	}
	
	// 대상 그리드와 셀 정보를 추가
	objGrid.popupMenu.grid = objGrid;
	objGrid.popupMenu.cellindex = e.cell;
	objGrid.popupMenu.rowindex = e.row;

	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));
	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0));

	// enable 처리
	if(objGrid.IsTree == true) {
		var popupMenu = objGrid.popupMenu;
		var popupMenuDs = popupMenu.getInnerDataset();
		var tree_row = popupMenuDs.findRow("id", "tree");
		if(tree_row > -1) {
			popupMenuDs.setColumn(tree_row, "enable", "true");
		}
	}	
	if(objGrid._IsTree == true) {
		var grouppanel_row = popupMenuDs.findRow("id", "grouppanel");
		if(grouppanel_row > -1) {
			popupMenuDs.setColumn(grouppanel_row, "enable", "false");
		}
	}
	
	objGrid.popupMenu.trackPopup(x, y);
};

/**
 * @class  gfnCreatePopupMenu 내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
 * @param {Object} objGrid	- 대상그리드
 * @param {Evnet}  e 		- 팝업메뉴클릭이벤트
 * @return N/A
 * @example
 * this.gfnPopupmenu_onmenuclick(this.grdMain, nexacro.MenuClickEventInfo);	
 */
pForm.gfnPopupmenu_onmenuclick = function (objMenu, e)
{
	var selectId   = e.id;
	var grid 	   = objMenu.grid;
	var nCellIndex = objMenu.cellindex;	
	var nRowIndex  = objMenu.rowindex;
	var userData   = e.userdata;

	switch(selectId) {
		case "searchpanel": //검색패널
			this._grd_find_panel_create(grid);
			break;
		case "grouppanel": //그룹패널
			if(grid.grouping != "false") {
				var grouppanel = grid.grouppanel;
				if (grouppanel.height == 0) {
					grouppanel.set_height(30);
					grid.set_top(grouppanel.id + ":0");
					if(grid.yn_grouppanel != "Y") {
						grid.yn_grouppanel = "Y";
						if(!this.gfnIsNull(grouppanel.col_group)) {
							this.gfnMakeReverseSubsumTree(grid, grouppanel.col_group, 200);
							this._grd_filter_row_set(grid, grid.getBindDataset(), true);
						}
					}
				} else {
					grouppanel.set_height(0);
					grid.set_top(grouppanel.id + ":0");
				}
			}
			break;
		case "colfix"://틀고정 열
			this.fv_CellIndex = nCellIndex;
			this._gfnGridcellFix(grid, this.fv_CellIndex, nRowIndex);
			break;
		case "colfixfree"://틀고정 열 해제
			this._gfnGridCellFree(grid);
			break;
		case "filter"://필터
			this._gfnGridFilter(grid);
			break;
		case "filterfree"://필터해제
			this._gfnGridCellFilterFree(grid);
			break;
		case "replace"://찾기/바꾸기
			this._gfnGridCellReplace(grid, nCellIndex, nRowIndex);
			break;
		case "colhide"://컬럼숨기기
			this._gfnGridColHideShow(grid, nRowIndex);
			break;	
		case "export"://엑셀내보내기
			this._gfnGridExcelExport(grid, nRowIndex);
			break;	
		case "import"://엑셀가져오기
			this._gfnGridExcelImport(grid, nRowIndex);
			break;
		case "initial"://정렬초기화
			//grid.set_formats("<Formats>" + grid.orgformat2 + "</Formats>");
			//this._gfnGridCellFree(grid);
			this._gfnClearSortMark(grid);
			//this._gfnGridAddProp(grid);
			break;
		case "treeall":
			this._gfnGridTreeOpenAll(grid, nRowIndex);
			break;
		case "treeopen":
			this._gfnGridTreeOpen(grid, userData);
			break;
		case "layoutset":
			var param = {};
			param.CD_SYSTEM = grid.CD_SYSTEM;
			param.ID_GRID = grid.ID_GRID;
			this._layoutset_grid = grid;
			this.gfnFormOpen("DZO", "DXX_NXGRIDSPEC_USER", "_gfnGridLayoutSet", param);
			break;
		case "layout#":
			this._gfnGridLayout(objMenu, grid, userData);
			break;
		default: break;
	}
};

/**
 * @class  _gfnGridSetCssclass 행고정/해제시 css설정
 * @param {Object} objGrid	- 대상그리드
 * @return N/A
 * @example
 * this._gfnGridSetCssclass(this.grdMain);	
 */
pForm._gfnGridSetCssclass = function (objGrid)
{
	var clname = "Cell_WF_Fixed";
	clname = nexacro.wrapQuote(clname);
			
	objGrid.set_enableredraw(false);

	for( var k=0; k<objGrid.getFormatColCount(); k++){
		var expr = "";
		if( objGrid.fixedRow >= 0 ){
			expr = "expr:comp.fixedRow==currow?"+clname+":''";
		}
		objGrid.setCellProperty("body", k, "cssclass", expr);
	}
	objGrid.set_enableredraw(true);
	objGrid.setFixedRow(objGrid.fixedRow);
};

/**
 * @class  그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크 ALL/None)
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 헤드클릭이벤트
 * @return  N/A
 * @example
 * this._gfnHeadCheckSelectAll(objGrid, e); //ALL CHECK
 */
pForm._gfnHeadCheckSelectAll = function (objGrid, e)
{
	//if(objGrid.readonly == true) return;
	
	var sType;
	var sChk;
	var sVal;;
	var sChkUpdate;
	var sChkVal;
	var oDsObj;
	var nHeadCell  = e.cell;
	var nBodyCell;
	var nSubCnt = objGrid.getSubCellCount("head", nHeadCell);

	oDsObj  = objGrid.getBindDataset();
	
	if(oDsObj.getRowCount() < 1) return;
	
	if(objGrid.getCellCount("body") != objGrid.getCellCount("head")) {
		nBodyCell = parseInt(objGrid.getCellProperty("head", nHeadCell, "col"));
	} else {
		nBodyCell = e.cell;
	}
	sChkVal = objGrid.getCellProperty("body", nBodyCell, "text");
	sChkVal = sChkVal.toString().replace("bind:", "");
		
	// Merge한 셀이 없는 경우
	sType = objGrid.getCellProperty("head", nHeadCell, "displaytype");

	if(sType != "checkboxcontrol") {
		return;
	}

	if (objGrid.info == "Y") {
		return;
	}
	if (!this.gfnIsNull(this.FormInfo) && this.FormInfo.TY_AUTH == "R") {
		return ;
	}
	
	// Head셋팅
	sVal = objGrid.getCellProperty("head", nHeadCell, "text");
	sChkUpdate = objGrid.getCellProperty("head", nHeadCell, "chkupdate");
	sTyInput = objGrid.getCellProperty("head", nHeadCell, "ty_input");

	if (sVal == "1") {
		objGrid.setCellProperty("head", nHeadCell, "text", "0");
		sChk="0";
	} else {
		objGrid.setCellProperty("head", nHeadCell, "text", "1");
//		var bodyCellIndex = this._gfnGridGetBodyCellIndex(objGrid, nHeadCell);
		// body cell index 에 해당하는 바인드 컬럼명
//		var columnName = this._gfnGridGetBindColumnNameByIndex(objGrid, bodyCellIndex);
// 		/if(columnName == "gridcmmcheck") {
// 			 sChk="";
// 		}else{
			sChk="1";
//		}
		if(objGrid.usAllCheck == null) {
			objGrid.usAllCheck = [];
		}
		if(!this.gfnIsExistInArray(objGrid.usAllCheck, nHeadCell)) {
			objGrid.usAllCheck.push(nHeadCell);
		}
	}
	
	if(sTyInput == "CHECKBOX_YN" || sTyInput == "CHECKBOXALL_YN") {
		sChk = (sChk=="1"?"Y":"N");
	}
	
	// Body셋팅
	if(sChkUpdate == "N") {
		objGrid.set_enableevent(false);
		oDsObj.set_enableevent(false);
	}
	for(var i=0 ; i< oDsObj.rowcount ; i++) {
		if(oDsObj.getColumn(i, this.ucFlag) == "#") continue;
		oDsObj.setColumn(i, sChkVal, sChk);
	}
	if(sChkUpdate == "N") {
		objGrid.set_enableevent(true);
		oDsObj.set_enableevent(true);
	}
	
	//전체선택/해제후 사용자 이벤트 발생
	var func = this.lookupFunc(objGrid.AfterAllCheck);
	if (func != null) {
		var bodyCellIndex = this._gfnGridGetBodyCellIndex(objGrid, nHeadCell);
		if(sTyInput == "CHECKBOX_YN" || sTyInput == "CHECKBOXALL_YN") {
			func.call(objGrid, bodyCellIndex, (sChk=="Y"?true:false));
		} else {
			func.call(objGrid, bodyCellIndex, (sChk=="1"?true:false));
		}
	}
};

/**
 * @class  마우스우클릭시 표현될 팝업메뉴생성
 * @param  {Object} objGrid	- 대상그리드
 * @return  N/A
 * @example
 * this._gfnGetHeadBodyIndex(this.grdMain, this.dsMain);	
 */
pForm._gfnMakeGridPopupMenu = function (objGrid) //, arrProp)
{
	var objApp 		 = pForm.gfnGetApplication();
	var objMenuDs 	 = objApp.gdsGridPopupMenu;
	var objParentForm= objGrid.parent;
	
	var sPopupDsMenu = "dsPopupMenu_"+objGrid.name+"_"+this.name;
	var objPopupDs 	 = new Dataset(sPopupDsMenu);
	objParentForm.addChild(sPopupDsMenu, objPopupDs); 
	objPopupDs.copyData(objApp.gdsGridPopupMenu);
	
// 	for(var i=0; i<arrProp.length; i++){
// 		for(var j=0; j<objPopupDs.rowcount; j++){
// 			var sMenu = objPopupDs.getColumn(j,"id");
// 			if( this.gfnIsNull(sMenu) ) continue;
// 			
// 			if( sMenu.indexOf(arrProp[i]) > -1 ){
// 				objPopupDs.setColumn(j, "enable", "true");
// 				if( objPopupDs.getColumn(j, "level") == 1){
// 					var sUpMenu = objPopupDs.getColumn(j, "upmenu");
// 					var nUpRow = objPopupDs.findRow("id", sUpMenu);
// 					if(nUpRow > -1) objPopupDs.setColumn(nUpRow, "enable", "true");
// 				}
// 			}
// 		}
// 	}
	var sPopMenu = "popMenu_"+objGrid.name+"_"+this.name;
	var objPopMenu = new PopupMenu(sPopMenu, 0, 0, 100, 100);
	
	var oEnvLang = nexacro.getEnvironmentVariable("evLanguage");
	objParentForm.addChild(objPopMenu.name, objPopMenu);
	
	objPopMenu.set_innerdataset(sPopupDsMenu);
	objPopMenu.set_captioncolumn("caption");
	objPopMenu.set_enablecolumn("enable");
	objPopMenu.set_idcolumn("id");
	objPopMenu.set_levelcolumn("level");
	objPopMenu.set_userdatacolumn("userdata");
 	objPopMenu.addEventHandler("onmenuclick", this.gfnPopupmenu_onmenuclick, objParentForm);
	objPopMenu.show();
	
	objPopMenu.set_itemheight(34);
	
	objPopMenu.grid = objGrid;
	objGrid.popupMenu = objPopMenu;
};

/**
 * @class  그리드 설정 내부함수<br>
		   그리드에 유저프로퍼티를 Array형태로 반환한다.
 * @param  {Object}objGrid	- 대상그리드
 * @return {Array} user property
 * @example
 * this._getGridUserProperty(this.grdMain);	
 */
pForm._getGridUserProperty = function (objGrid)
{
	var sProp = objGrid.griduserproperty;
	
	var arrdefault = this.defaultmenulis.split(",");
	var arrprop = [];
	
	if(!this.gfnIsNull(sProp)){
		arrprop = sProp.split(",");
		for( var i=0; i<arrprop.length; i++){
			if( arrprop[i].indexOf("!") == 0 ){
				//TODO.DEFAULT에서제거
				for( var j=0; j<arrdefault.length; j++){
					if( arrdefault[j] == arrprop[i].substr(1) ){
						arrdefault[j] = "";
					}
				}
				arrprop[i] = "";
			}
		}
	}
	
	var arrmyprop = [];
	for( var i=0; i< arrdefault.length; i++){
		if(!this.gfnIsNull(arrdefault[i])){
			arrmyprop.push(arrdefault[i]);
		}
	}
	
	for( var i=0; i< arrprop.length; i++){
		if(!this.gfnIsNull(arrprop[i])){
			arrmyprop.push(arrprop[i]);
		}
	}
	
	return arrmyprop;
};


//////////////////////////////////////////////////////////////////////////Popupmenu//////////////////////////////////////////////////////////////////////////
/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
		  셀고정(colfix)
 * @param {Object} objGrid  - 대상그리드
 * @param {Number} nCellIdx - 셀고정 셀인덱스
 * @param {Number} nRowIdx  - 셀고정 로우 인덱스
 * @return N/A
 * @example
 * this._gfnGridcellFix(this.grdMain, 1, 2);	
 */
pForm._gfnGridcellFix = function (objGrid, nCellIdx, nRowIdx)
{
	var sBandType;
	if(nRowIdx == -1) sBandType = "Head";
	else if(nRowIdx == -2) sBandType = "Summary";
	else sBandType = "Body";
	
	var nCol 	 = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "col"));
	var nColSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "colspan"));
	var nRowSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "rowspan"));
	var nVal = objGrid.getCellpos
	var nMaxCol = 0;
	var i;
	var nRealCol;
	var nRealColSpan;
	var nRealCol_end;
	
	objGrid.set_enableredraw(false);
	
	objGrid.setFormatColProperty(0, "band", "body");	
	
	for (i=1; i<objGrid.getCellCount("Head"); i++)
	{
		nRealCol = nexacro.toNumber(objGrid.getCellProperty("Head", i, "col"));
		nRealColSpan = nexacro.toNumber(objGrid.getCellProperty("Head", i, "colspan"));
		nRealCol_end = nRealCol+nRealColSpan-1;
		if (nCol >= nRealCol && nCol <= nRealCol_end)
		{
			if(nRealColSpan>1)
			{
				//objGrid.setCellProperty("Head", i, "line", "1 solid #dcdbdaff,2 solid #919191ff");
				nCol = nRealCol_end;
			}else
			{
				//objGrid.setCellProperty("Head", i, "line", "1 solid #dcdbdaff,2 solid #919191ff");
				nCol = nRealCol_end;
			}
		}else
		{
			//objGrid.setCellProperty("Head", i, "line", "");
		}
	}
	
	for (i=1; i<objGrid.getCellCount("Body"); i++)
	{
		if (objGrid.getCellProperty("Body", i, "col") == nCol)
		{
			//objGrid.setCellProperty("Body", i, "line", "1 solid #dcdbdaff,2 solid #919191ff");
			objGrid.setCellProperty("Body", i, "border", "0px none , 2px solid #6791de , 1px solid #d2cfcd , 0px none");
		}
		else
		{
			//objGrid.setCellProperty("Body", i, "line", "");
			objGrid.setCellProperty("Body", i, "border", "0px none , 1px solid #f2f2f2 , 1px solid #d2cfcd, 0px none");
		}
	}	
	
	objGrid.setFormatColProperty(nCol, "band", "left");	
	objGrid.set_enableredraw(true);
	
	this._grd_head_onmouseover(objGrid, this);
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
		  셀고정해제(colfree)
 * @param {Object} objGrid - 대상그리드
 * @return N/A
 * @example
 * this._gfnGridCellFree(this.grdMain);	
 */
pForm._gfnGridCellFree = function(objGrid)
{
	objGrid.set_enableredraw(false);
	for(var i=1; i<objGrid.getCellCount("Head"); i++)
	{			
		if (objGrid.getFormatColProperty(i, 'band') == 'left') {
			objGrid.setFormatColProperty(i, "band", "body");	
		}
	}
		
	for (var i=1; i<objGrid.getCellCount("body"); i++)
	{
		objGrid.setCellProperty("Body", i, "border", "0px none , 1px solid #f2f2f2 , 1px solid #d2cfcd, 0px none");
	}	
	
	objGrid.set_enableredraw(true);
	
	this.gv_CellIndex = -1;
	
	this._grd_head_onmouseover(objGrid, this);
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          셀필터(cellFilter)
 * @param {Object} objGrid - 대상그리드	
 * @param {Number} nCell - 셀필터 셀 인덱스
 * @return N/A
 * @example
 * this._gfnGridFilter(this.grdMain);	
 */
pForm._gfnGridFilter = function(objGrid)
{
	var sTitle = "데이터 필터 설정";
	var oArg = {pvGrid:objGrid};
	
	var oOption = {title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
	var sPopupCallBack = "gfnGridFilterCallback";
	this.gfnOpenPopup( "cmmGridFilter", "cmm::cmmGridFilter.xfdl",oArg, sPopupCallBack, oOption);	
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          셀필터해제(cellfilterfree)
 * @param {Object} objGrid - 대상그리드	
 * @param {Number} nCell - 셀필터 셀 인덱스
 * @return N/A
 * @example
 * this._gfnGridCellFilterFree(this.grdMain);	
 */
pForm._gfnGridCellFilterFree = function(objGrid)
{
	var objDs = objGrid.getBindDataset();
	if(this.gfnIsNull(objDs.filterstr)) return;
	
	if(objDs.getColumn(0, this.ucFlag) == "#") {
		objDs.set_enableevent(false);
		for(var c = 0; c < objDs.colinfos.length; c++) {
			var colid = objDs.colinfos[c].name;
			if (colid==this.ucFlag || colid==this.ucSort) continue;
			objDs.setColumn(0, colid, null);
		}
		objDs.set_enableevent(true);
	}
	objDs.set_filterstr("");
	objGrid.usFilter = [];
	objGrid.usFilterGrid = [];
	objGrid.usFilterOr = {};
	objGrid.usFilterList = {};
	
	for(var i=0; i < objGrid.getCellCount("head"); i++){
		var cellCSS = objGrid.getCellProperty("head", i, "cssclass");
		objGrid.setCellProperty("head",i,"cssclass", cellCSS.replace(" selfilter", "").replace("selfilter", ""));
	}
	
 	objDs.set_enableevent(false);
	this._grd_filter_row_set(objGrid, objDs, true);
 	objDs.set_enableevent(true);
	
	var bl_Filterlist = document.getElementsByClassName('filterlist');
	for (let i = 0; i < bl_Filterlist.length; i++) {
       bl_Filterlist[i].style.display = 'none';
    }
	
	this._grd_filter_row_fix(objGrid, objDs);
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          찾기/바꾸기
 * @param {Object} objGrid - 대상그리드	
 * @param {Number} nCell - 셀필터 셀 인덱스
 * @return N/A
 * @example
 * this._gfnGridCellReplace(this.grdMain);	
 */
pForm._gfnGridCellReplace = function(objGrid,nCellIndex,nRowIndex)
{
	var sTitle = "데이터 찾기/바꾸기";
	var orgselecttype = objGrid.selecttype;

	var oArg = {pvGrid:objGrid, pvStrartRow:nRowIndex, pvSelectCell:nCellIndex, pvSelectType:orgselecttype};
	var oOption = {title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
	var sPopupCallBack = "gfnReplaceCallback";
	this.gfnOpenPopup( "cmmFindReplace","cmm::cmmFindReplace.xfdl",oArg,sPopupCallBack,oOption);	
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          컬럼 숨기기/보이기
 * @param {Object} objGrid - 대상그리드	
 * @param {Number} nCell - 셀필터 셀 인덱스
 * @return N/A
 * @example
 * this._gfnGridColHideShow(this.grdMain);	
 */
pForm._gfnGridColHideShow = function(objGrid)
{
	var sTitle = "컬럼 보이기/숨기기";
	
	var oArg = {pvGrid:objGrid};
	var oOption = {title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
	var sPopupCallBack = "gfnColumnHidCallback";
	this.gfnOpenPopup( "cmmColumnHide","cmm::cmmColumnHide.xfdl",oArg,sPopupCallBack,oOption);	
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          엑셀익스포트
 * @param {Object} objGrid - 대상그리드	
 * @return N/A
 * @example
 * this._gfnGridExcelExport(this.grdMain);	
 */
pForm._gfnGridExcelExport = function(objGrid)
{
	this.gfnExcelExport(objGrid);
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          엑셀임포트
 * @param {Object} objGrid - 대상그리드	
 * @return N/A
 * @example
 * this._gfnGridExcelImport(this.grdMain);	
 */
pForm._gfnGridExcelImport = function(objGrid)
{
	var sDataset = objGrid.binddataset;
	this.gfnExcelImport(sDataset, "sheet1", "A2", "fnImportCallback", objGrid.name + sDataset , this);
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          그리드 개인화내용 저장을 위해 유니크한 아이디를 구성한다.
 * @param {Object} objGrid - 대상그리드	
 * @return N/A
 * @example
 * this._gfnGridPersonalize(this.grdMain);	
 */
pForm._getUniqueId = function (objGrid)
{
	var sFormId;
	var oForm = objGrid.parent; //대상FORM조회
	while (true)
	{
		if(oForm instanceof nexacro.ChildFrame){
			break;
		}else{
			oForm = oForm.parent;
		}
	}
	sFormId = oForm.name;
	if( sFormId.indexOf("win") > -1 ){
		//팝업과 workform구분
		sFormId = oForm.form.divWork.form.name;
	}
	
	var otf = objGrid.parent.parent;
	if( otf instanceof nexacro.Tabpage){
		//탭안에 그리드가 있을경우
		sFormId += "_" + otf.parent.name +"_"+ otf.name;
	}else if( otf instanceof nexacro.Div && otf.name != "divWork"){
		//div안에 그리드가 있을경우
		sFormId += "_" + otf.name;
	}
	sFormId += "_" + objGrid.name;
	return sFormId;
};

//////////////////////////////////////////////////////////////////////////POPUPMENU CALLBACK///////////////////////////////////////////////////////////

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          그리드 개인화 메세지콜백
 * @param {String} sid - popupid	
 * @param {String} rtn - return value	 
 * @return N/A
 * @example
 * this.gfnGridFormatChangeFormatCallback("TEST", "");	
 */
pForm.gfnGridFormatChangeMsgCallback = function (sid, rtn)
{
	//TODO.
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          그리드 찾기/바꾸기 팝업 콜백
 * @param {String} sid - popupid	
 * @param {String} rtn - return value	 
 * @return N/A
 * @example
 * this.gfnReplaceCallback("TEST", "");	
 */
pForm.gfnReplaceCallback = function (sid, rtn)
{
	//TODO
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          그리드 필터 팝업 콜백
 * @param {String} sid - popupid	
 * @param {String} rtn - return value	 
 * @return N/A
 * @example
 * this.gfnGridFilterCallback("TEST", "");	
 */
pForm.gfnGridFilterCallback = function (sid, rtn)
{
	//TODO
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
          그리드 컬럼숨기기/보이기
 * @param {String} sid - popupid	
 * @param {String} rtn - return value	 
 * @return N/A
 * @example
 * this.gfnColumnHidCallback("TEST", "");	
 */
pForm.gfnColumnHidCallback = function (sid, rtn)
{
	//TODO
};

//////////////////////////////////////////////////////////////////////////POPUPMENU FUNCTION///////////////////////////////////////////////////////////
/**
 * @class   주어진 문자열을 그리드에서 찾는다.
 * @param {Object} grid - 대상그리드	
 * @param {String} findText - 찾을 문자열	
 * @param {Object} option - 찾기옵션	
 * @return {Object} 찾은 열과행
 * @example
 * this.gfnFindGridText(this.fv_grid, txt, option);
 */
pForm.gfnFindGridText = function (grid, findText, option)
{
	grid.lastFindText = findText;
	grid.lastFindOption = option;

	// 찾을 옵션
	var direction = option.direction;
	var position = option.position;
	var scope = option.scope;
	var condition = option.condition;
	var strict = option.strict;

	var dataset = grid.getBindDataset();
	var startCell = ( position == "current" ? grid.currentcell : grid.lastFindCell );
	var startRow = ( position == "current" ? grid.currentrow : grid.lastFindRow );
	
	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
	if ( scope == "col" && !this.gfnIsNull(option.cell) )
	{
		startCell = option.cell;
	}
	
	var findRow = findCell = -1;
	var rowCnt = dataset.rowcount;
	var bodyCellCnt = grid.getCellCount("body");
			
	// 대소문자 구분
	if ( !strict )
	{
		findText = findText.toUpperCase();			
	}
		
	if ( direction == "prev" )
	{
		startRow -= 1;	
		if ( startRow < 0 )
		{
			startRow = rowCnt-1;
		}
	}
	else
	{
		startRow += 1;
		if ( startRow >= rowCnt )
		{
			startRow = 0;
		}
	}
	
	var loopCnt = rowCnt;
	while ( loopCnt > 0 )
	{
		// 문자열 비교
		if ( this._compareFindText(grid, startRow, startCell, findText, condition, strict) )
		{
			findRow = startRow;
			findCell = startCell;
			break;
		}
		
		// 방향 (이전, 다음)
		if ( direction == "prev" )
		{
			startRow -= 1;
			if ( startRow < 0 )
			{
				startRow = rowCnt-1;
			}				
		}
		else
		{
			startRow += 1;
			if ( startRow > (rowCnt-1) )
			{
				startRow = 0;
			}
		}
		
		loopCnt--;
	}
	// 마지막 찾은 위치 지정
	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
	if ( findRow > -1 && findCell > -1 )
	{
		grid.lastFindRow = findRow;
		grid.lastFindCell = findCell;
	}
	
	return [findRow, findCell];
};

/**
 * @class   주어진 문자열을 그리드에서 찾아서 바꿀 문자열로 변경한다.
 * @param {Object} grid - 대상 Grid Component
 * @param {String} findText - 찾을 문자열
 * @param {String} replaceText - 바꿀 문자열
 * @param {Object} option - 찾을 옵션
 * @param {Boolean} all - 모두 바꾸기 여부
 * @return {Number} 변경 항목 개수.
 * @example
 *this.gfnReplaceGridText(grid, findText, replaceText, option, bAllChg);
 */
pForm.gfnReplaceGridText = function(grid, findText, replaceText, option, all)
{
	// F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
	grid.lastFindText = findText;
	grid.lastFindOption = option;
	
	if ( this.gfnIsNull(all) )
	{
		all = false;
	}
	
	
	// 찾을 옵션 ( 바꾸기의 범위는 특정 칼럼만 지원) 
	var direction = option.direction;
	var position = option.position;
	var condition = option.condition;
	var strict = option.strict;
	var cell = option.cell;
	
	var dataset = grid.getBindDataset();//this.gfnLookup(grid.parent, grid.binddataset);
	
	// 바꾸기의 범위는 특정 칼럼만 지원
	var startCell = option.cell;
	var startRow;
	
	if ( position == "current" )
	{
		startRow = grid.currentrow;
	}
	else
	{
		var lastReplaceRow = grid.lastReplaceRow;
		if ( this.gfnIsNull(lastReplaceRow) )
		{
			startRow = 0;
		}
		else
		{
			startRow = lastReplaceRow;
		}
	}
	
	var results = [];
	var findRow = findCell = -1;		
	var rowCnt = dataset.rowcount;
	var bodyCellCnt = grid.getCellCount("body");
	
	// 바꿀 문자열 목록에 등록
	//this.appendFindReplaceCache("replace", replaceText);
	
	// 대소문자 구분
	if ( !strict )
	{
		findText = findText.toUpperCase();	
	}
	
	// 열 범위 바꾸기
	var result;
	var loopCnt = rowCnt;
	while ( loopCnt > 0 )
	{
		// 문자열 비교
		if ( this._compareFindText(grid, startRow, startCell, findText, condition, strict) )
		{
			findRow = startRow;
			findCell = startCell;
			result = this._replaceGridCellText(grid, findRow, findCell, findText, replaceText, strict);
			results.push(result);
			if ( !all ) break;
		}
		
		// 방향 (이전, 다음)
		if ( direction == "prev" )
		{
			startRow -= 1;
			if ( startRow < 0 )
			{
				startRow = rowCnt-1;
			}				
		}
		else
		{
			startRow += 1;
			if ( startRow > (rowCnt-1) )
			{
				startRow = 0;
			}
		}
		
		loopCnt--;
	}
		
	// 마지막 바꾸기 위치 지정
	grid.lastReplaceRow = findRow;
	return results;
};

 /**
 * @class   바꾸기에 의해 찾아진 행, 셀 인덱스에 해당하는 데이터를 실제 변경한다.
 * @param {Object} grid 대상 Grid Component
 * @param {Number} findRow 찾아진 행 인덱스
 * @param {Number} findCell 찾아진 셀 인덱스
 * @param {String} findText 찾을 문자열
 * @param {String} replaceText 바꿀 문자열
 * @param {Boolean} strict 대소문자 구분
 * @return {Object} result - 결과
 * @example
 * this._replaceGridCellText(grid, findText, replaceText, option, bAllChg);
 */
pForm._replaceGridCellText = function(grid, findRow, findCell, findText, replaceText, strict)
{
	var result = {'replace': true, 'message': '처리되었습니다.', 'row': findRow, 'cell': findCell};
	
	// expr 등에 의해 셀이 실제 입력 가능한지 테스트 후 처리
	var dataset = grid.getBindDataset();//this.gfn_Lookup(grid.parent, grid.binddataset);
	dataset.set_rowposition(findRow);
	grid.setCellPos(findCell);
// 	trace(grid + " :::: " + grid.name);
// 	trace("111111111111111111 findRow :: " + findRow + " findCell :: " + findCell)
// 	trace("111111111111111111 dataset :: " + dataset.name);
//	var editable = grid.showEditor(true);
// 	trace("111111111111111111 editable :: " + editable);
// 	if ( editable )
// 	{
// 		grid.showEditor(false);
// 	}
// 	else
// 	{
// 		 return;
// 	}
	var displayType = grid.getCellProperty("body", findCell, "displaytype");
	var editType 	= grid.getCellProperty("body", findCell, "edittype");
	var text 		= grid.getCellProperty("body", findCell, "text");
	var bindColid 	= text.replace("bind:", "");
	
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	var dataType = this.gfnGetBindColumnType(grid, findCell);
	if ( this.gfnIsNull(displayType) || displayType == "normal" )
	{
		switch(dataType)
		{
			case 'INT' :
			case 'FLOAT' :
			case 'BIGDECIMAL' :
				displayType = "number";
				break;
			case 'DATE' :
			case 'DATETIME' :
			case 'TIME' :
				displayType = "date";
				break;
			default :
				displayType = "text";
		}
	}
	
	var replace;
	var replaceVal;
	var columnValue = dataset.getColumn(findRow, bindColid);
	var displayValue = grid.getCellText(findRow, findCell);
	if ( displayType == "number" || displayType == "currency" )
	{
		// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 변경
		if ( displayType == "currency" )
		{
			var code = findText.charCodeAt(0);
			if ( code == 65510 || code == 92 )
			{
				findText = findText.substr(1);
			}
			
			code = replaceText.charCodeAt(0);
			if ( code == 65510 || code == 92 )
			{
				replaceText = replaceText.substr(1);
			}
			
			code = displayValue.charCodeAt(0);
			if ( code == 65510 || code == 92 )
			{
				displayValue = displayValue.substr(1);
			}			
		}
		
		// 셀에 보여지는 값에서 찾는 문자열 값을 변경
		
		// 대소문자 구분
		if ( strict )
		{
			displayValue = displayValue.replace(findText, replaceText);
		}
		else
		{
			displayValue = this.gfnReplaceIgnoreCase(displayValue, findText, replaceText);
		}		
		
		// 숫자형 이외 제거
		replaceVal = this._replaceNumberMaskValue(displayValue);
	}
	else if ( displayType == "date"|| displayType == "calendarcontrol" )
	{
		if ( columnValue == null )
		{
			// 값이 없을때 보이는 "0000-01-01" 과 같이 
			// 텍스트에서 찾아 질 경우가 있다.
			result.replace = false;
			result.message = "유효한 날짜가 아닙니다.";
		}
		else	
		{							
			var mask = grid.getCellProperty("body", findCell, "calendardateformat");
			var ret = this._replaceDateMaskValue(columnValue, displayValue, findText, replaceText, mask, strict);			
			replaceVal = ret[1];
			
			if ( ret[0] == false )
			{
				result.replace = false;
				result.message = ret[2];
			}
		}
	}
	else
	{
		// 대소문자 구분
		if ( strict )
		{
			replaceVal = columnValue.replace(findText, replaceText);
		}
		else
		{
			replaceVal = this.gfnReplaceIgnoreCase(columnValue, findText, replaceText);
		}					
	}
		
	if ( result.replace )
	{
		dataset.setColumn(findRow, bindColid, replaceVal);
	}
	
	return result;
};

 /**
 * @class   문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
 * @param {String} sOrg - 원래 문자열( 예 : "aaBBbbcc" )
 * @param {String} sRepFrom - 찾고자 하는 문자열( 예 : "bb" )
 * @param {String} sRepTo - 치환될 문자열 ( 예 : "xx" )
 * @return {String} 치환된 문자열 ( 예 : "aaxxxxccxx" ).
 * @example
 * this.gfnReplaceIgnoreCase(str, findStr, "x");
 */
pForm.gfnReplaceIgnoreCase = function( sOrg, sRepFrom, sRepTo )	
{
	var pos, nStart=0, sRet="";
	
	while(1)
	{
		pos = sOrg.toLowerCase().indexOf(sRepFrom.toLowerCase(), nStart)
		
		if( pos < 0 )
		{
			sRet += sOrg.substr( nStart );
			break;
		}
		else
		{
			sRet += sOrg.substr( nStart, pos - nStart);
			sRet += sRepTo;
			nStart = pos+sRepFrom.length;
		}
	}
	
	return sRet;
};

 /**
 * @class  날짜형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
 * @param {*} columnValue - 변경전 데이터셋의 실제 값
 * @param {String} displayValue - 보여지는 문자열
 * @param {String} findText - 찾을 문자열
 * @param {String} replaceText - 바꿀 문자열
 * @param {String} mask - 마스크 속성값
 * @param {Boolean} strict - 대소문자 구분 여부
 * @return {Object} 변환정보 (날짜여부, 변경된 문자열, 에러메시지)
 * @example
 * this._replaceDateMaskValue(str, findStr, "x");
 */
pForm._replaceDateMaskValue = function(columnValue, displayValue, findText, replaceText, mask, strict)
{		
	if ( this.gfnIsNull(replaceText) )
	{
		// 바꿀 문자열이 빈값이 되지 않도록 패딩
		replaceText = replaceText.padRight(findText.length, " ");
	}
	
	// 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
	var replaceDisplayValue;
	
	// 대소문자 구분
	if ( strict )
	{
		replaceDisplayValue = displayValue.replace(findText, replaceText);
	}
	else
	{
		replaceDisplayValue = this.gfnReplaceIgnoreCase(displayValue, findText, replaceText);
	}
	
	// 바꿀 값이 없다면 값을 제거한다.
	if ( this.gfnIsNull(replaceDisplayValue.trim()) )
	{
		return [true, null];
	}
	
	// 2. mask 문자 분리
	var arrMask = this._parseDateMask(mask);
	
	// 3. 변경한 값과 마스크 값을 비교하면서 실제 값을 추출하고 유효날짜 판단
	var tmpStr = "";
	var isDate = true;
	var errorMsg = "";
	var valueIndex = 0;
	var displayIndex = 0;
	var dateValue = [];
	var errorValue = [];
	var checkMask;
	var checkDayIndex = -1;
	var checkYearValue = "";
	var checkMonthValue = "";
	
	for ( var i=0,len=arrMask.length; i<len ; i++ )
	{
		checkMask = arrMask[i];
		if ( !this.gfnIsDigit(checkMask) )
		{
			switch (checkMask)
			{
				case 'yyyy' :
					tmpStr = replaceDisplayValue.substr(displayIndex, 4);
					
					if ( tmpStr.length != 4 || !nexacro.isNumeric(tmpStr) )
					{
						isDate = false;	
						errorMsg = "연도가 올바르지 않습니다.";
					}
					
					// 일자체크를 위해
					checkYearValue = tmpStr;
					
					dateValue[dateValue.length] = tmpStr.trim(" ");
					errorValue[errorValue.length] = tmpStr.trim(" ");
					displayIndex += 4;					
					valueIndex += 4;
					break;
				case 'yy' :
				case 'MM' :
				case 'dd' :
				case 'hh' :
				case 'HH' :
				case 'mm' :
				case 'ss' :
					tmpStr = replaceDisplayValue.substr(displayIndex, 2);
										
					if ( tmpStr.length == 2 && nexacro.isNumeric(tmpStr) )
					{
						if ( checkMask == "yy" )
						{
							// 앞 두자리를 원본 데이터로 채운다.
							tmpStr = columnValue.substr(valueIndex, 2) + tmpStr;
							
							// 일자체크를 위해
							checkYearValue = tmpStr;
						}					
						else if ( checkMask == "MM" )
						{
							if ( parseInt(tmpStr) < 1 || parseInt(tmpStr) > 12 )
							{
								isDate = false;
								errorMsg = "월이 올바르지 않습니다.";
							}
							
							// 일자체크를 위해
							checkMonthValue = tmpStr;
						}
						else if ( checkMask == "dd" )
						{
							// 윤년을 적용하기 위해서는 연도가 필요한데 
							// 무조건 연도(yyyy, yy)가 일(dd) 보다 앞에 온다는
							// 보장이 없으므로 루프가 끝난 후 체크한다.
							checkDayIndex = dateValue.length;
						}
						else if ( checkMask == "hh" || checkMask == "HH" )
						{
							if ( parseInt(tmpStr) < 0 || parseInt(tmpStr) > 23 )
							{
								isDate = false;
								errorMsg = "시간이 올바르지 않습니다.";
							}
						}
						else if ( checkMask == "mm" || checkMask == "ss" )
						{
							if ( parseInt(tmpStr) < 0 || parseInt(tmpStr) > 59 )
							{
								isDate = false;
								errorMsg = "분이 올바르지 않습니다.";
							}
						}
					}
					else
					{
						isDate = false;
						errorMsg = "날짜 형식이 올바르지 않습니다.";
					}
					
					dateValue[dateValue.length] = tmpStr.trim(" ");	
					errorValue[errorValue.length] = tmpStr.trim(" ");	
					displayIndex += 2;
					valueIndex += 2;
					break;
			} // end switch
		}
		else
		{
			// dateValue 는 실제 적용할 값이므로 skip 하자
			
			// 마스크 문자가 아닌 경우 표시문자 이므로 원래 값의 것을 사용
			errorValue[errorValue.length] = displayValue.charAt(checkMask);
			displayIndex += 1;
		}
	}
	
	// 일자 유효 체크
	if ( !this.gfnIsNull(checkYearValue) && 
	     !this.gfnIsNull(checkMonthValue) && checkDayIndex > -1 )
	{
		var dt = checkYearValue + checkMonthValue + "01";
		var inputDay = parseInt(dateValue[checkDayIndex]);
		var lastDay = this.gfnGetMonthLastDay(dt);
	}
	
	if ( isDate )
	{
		return [isDate, dateValue.join("")];
	}
	else
	{
		return [isDate, errorValue.join(""), errorMsg];
	}
};

/**
 * @class  날짜형 마스크 구문을 분석합니다.
 * @param {String} mask - mask 마스크 속성값
 * @return {Object} 구문값
 * @example
 * this._parseDateMask("yyyy-MM-dd");
 */
pForm._parseDateMask = function(mask)
{
	arrMask = [];
	var dateMaskCache;
	var maskArr = mask.split("");	
	var tmpStr = "";
	var tokenStr = "";
	var seq = 0;

	for (var i=0,len=mask.length; i<len;)
	{
		tmpStr = mask.substr(i, 4);
		if ( tmpStr == "yyyy" )
		{
			arrMask[seq] = tmpStr;
			i += 4;
			seq++;
			continue;
		}
		
		// ddd => 요일은 입력할 수 없다.		
		tmpStr = mask.substr(i, 3);
		if ( tmpStr == "ddd" )
		{
			//arrMask[seq] = tmpStr;
			i += 3;
			//seq++;
			continue;
		}						
		
		// hh의 경우 (Calendar는 HH이며 그리드는 둘다 동작함)
		tmpStr = mask.substr(i, 2);
		if ( tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
			 tmpStr == "HH" || tmpStr == "hh" || tmpStr == "mm" || tmpStr == "ss" )
		{
			arrMask[seq] = tmpStr;
			i += 2;
			seq++;
			continue;
		}
		
		tokenStr = maskArr[i];
		
		// 입력되지 않으므로 skip.
		if ( tokenStr == "H" || tokenStr == "M" ||
			 tokenStr == "d" || tokenStr == "m" || tokenStr == "s" )
		{
			//arrMask[seq] = tokenStr;
			//seq++;
		}
		else
		{
			arrMask[seq] = i;
			seq++;					
		}
		i++;
	}
	
	//dateMaskCache[mask] = arrMask;
	
	return arrMask;
};

 /**
 * @class  숫자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
 * @param {String} mask - 숫자형 문자열
 * @return {String} 변환값 문자열
 * @example
 * this._replaceNumberMaskValue("20170808");
 */
pForm._replaceNumberMaskValue = function(numString)
{
	numString = numString.trim();
	
	var numReg = /[0-9]/;
	var bPoint = false; // 소숫점은 1개만 인정.
	var bInside = false; // 부호는 숫자가 나오기 전에만 인정.
	var c, buf = [];
	
	for(var i=0, len=numString.length; i<len; i++ ) 
	{
		c = numString.charAt(i);
		if( ( c == '+' || c == '-') && ( bInside === false) ) 
		{
			// 부호는 숫자가 나오기 전에만 인정.
			buf.push(c);
			bInside = true;
		}
		else if( numReg.test(c) ) 
		{
			// 숫자인경우 인정.
			buf.push(c);
			bInside = true;
		}
		else if( c == "." && bPoint === false ) 
		{
			// 소숫점은 1회만 인정.
			buf.push(c);
			bPoint = true;
			bInside = true;
		}
		else if( c != "," )
		{
			return "";
		}
	}
	return buf.join("");
};

 /**
 * @class   주어진 행, 셀 인덱스에 해당하는 그리드 데이터와 <br>
 * 문자열을 비교하여 찾아진 결과를 반환
 * @param {Object} grid - 대상 Grid Component
 * @param {Number} row - 찾을 행 인덱스
 * @param {Number} cell - 찾을 셀 인덱스
 * @param {String} findText - 찾을 문자열
 * @param {String} condition - 찾을 조건(equal/inclusion)
 * @param {Boolean} strict - 대소문자 구분 (true/false)
 * @return {Boolean} - 찾기 성공.
 * @example
 * this._compareFindText(grid, startRow, startCell, findText, condition, strict) 
 */
pForm._compareFindText = function(grid, row, cell, findText, condition, strict)
{
	var cellText = grid.getCellText(row, cell);
	if( this.gfnIsNull(cellText))return;
	var displayType = grid.getCellProperty("body", cell, "displaytype");
		
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	if ( this.gfnIsNull(displayType) || displayType == "normal" )
	{
		var dataType = this.gfnGetBindColumnType(grid, cell);
		switch(dataType)
		{
			case 'INT' :
			case 'FLOAT' :
			case 'BIGDECIMAL' :
				displayType = "number";
				break;
			case 'DATE' :
			case 'DATETIME' :
			case 'TIME' :
				displayType = "date";
				break;
			default :
				displayType = "string";
		}
	}
	
	// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
	if ( displayType == "currency" )
	{
		var code = cellText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			cellText = cellText.substr(1);
		}
		
		code = findText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			findText = findText.substr(1);
		}
	}

	// 대소문자 구분
	if ( !strict )
	{
		cellText = cellText.toUpperCase();
	}
	// 일치/포함
	if ( condition == "equal" )
	{
		if ( findText == cellText )
		{
			return true;
		}
	}
	else 
	{
		if ( cellText.indexOf(findText) > -1 )
		{			
			return true;
		}
	}

	return false;
};

 /**
 * @class   데이터의 타입반환
 * @param {Object} grid - 대상 Grid Component
 * @param {Number} cell - 찾을 셀 
 * @return {Object} - 찾기 성공.
 * @example
 *  this.gfnGetBindColumnType(grid, cell);
 */
pForm.gfnGetBindColumnType = function(grid, cell)
{
	var dataType = null;
	var dataset = this.gfnLookup(grid.parent, grid.binddataset);
	var bindColid = grid.getCellProperty("body", cell, "text");
		bindColid = bindColid.replace("bind:", "");
	
	if ( !this.gfnIsNull(bindColid) )
	{
		var colInfo = dataset.getColumnInfo(bindColid);
		if ( !this.gfnIsNull(colInfo) )
		{
			dataType = colInfo.type;
		}
	}
	
	return dataType;
};

//////////////////////////////////////////////////////////////////////////CELL COPY AND PASTE//////////////////////////////////////////////////////////////////////////
/**
 * @class copy event(nexacro, ie)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridCopyEventForRuntime(obj, e);	
*/
pForm._gfnGridCopyEventForRuntime = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	var colSeperator = "\t";
	var copyData = "";
	var checkIndex = {};
	
	for (var i = startrow; i <= endrow; i++) {
		var row = i;
		if(obj.IsTree) {
			row = obj.getTreeRow(i);
			if(row == -1) {
				continue;
			}
		}
		for (var j = startcol; j <= endcol; j++) {
			if(obj.getFormatColProperty(j, "size") == 0) continue;
			var value = obj.getCellValue(row,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(row,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(row,j);
				}
			} else {
				copyData += colSeperator;
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	system.clearClipboard();
	system.setClipboard("CF_TEXT",copyData);
	
};

/**
 * @class copy event(chrome)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridCopyEventForRuntime(obj, e);	
*/
pForm._gfnGridCopyEventForChrome = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	var colSeperator = "\t";
	var copyData = "";
	var checkIndex = {};
	
	for (var i = startrow; i <= endrow; i++) {
		var row = i;
		if(obj.IsTree) {
			row = obj.getTreeRow(i);
			if(row == -1) {
				continue;
			}
		}
		for (var j = startcol; j <= endcol; j++) {
			if(obj.getFormatColProperty(j, "size") == 0) continue;
			var value = obj.getCellValue(row,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(row,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(row,j);
				}
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	// https일때만 지원
	navigator.clipboard.writeText(copyData);

	e.stopPropagation();
};

/**
 * @class copy event(chrome)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridCopyEventForEtc(obj, e);	
*/
pForm._gfnGridCopyEventForEtc = function (obj, e)
{
	var ds = obj.getBindDataset();
	
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var colSeperator = "\t";
	var copyData = "";
	
	for (var i = startrow; i <= endrow; i++) {
		var row = i;
		if(obj.IsTree) {
			row = obj.getTreeRow(i);
			if(row == -1) {
				continue;
			}
		}
		for (var j = startcol; j <= endcol; j++) {
			if(obj.getFormatColProperty(j, "size") == 0) continue;
			var value = obj.getCellValue(row,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(row,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(row,j);
				}
			} else {
				copyData += colSeperator;
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";

// 	var ta = this._createTextarea(copyData);
// 	this.tragetGrid = obj;
// 	this.tragetGrid["ta"] = ta;

	var ta = this._createTextarea(copyData);
	ta.value = copyData;
	ta.select();
	ta.focus();
	document.execCommand("copy", false, null);
	
	e.stopPropagation();
};

pForm._gfnGridPasteCallback = function(event) 
{
	var clipText = event.clipboardData.getData('Text');
	var copyData = new String(clipText);
	var cpInfo = nexacro.getApplication().getActiveForm()._GridCopyPasteInfo;
	
	if(cpInfo.grid.IsOnBlock==true) return false;
	var oForm = cpInfo.form;
	oForm.setWaitCursor(true);
	oForm.gfnSetTimer(oForm,
		function() {
			cpInfo.callback(cpInfo.form, cpInfo.grid, copyData, true);
			oForm.setWaitCursor(false);
		}, 5
	);
	//nexacro.getApplication().getActiveForm()._grd_paste_callback();
	//document.removeEventListener('paste', nexacro.getApplication().getActiveForm()._gfnGridPasteCallback)
};

/**
 * @class paste데이터생성
 * @param {String} browser - 브라우저
 * @return paste데이터 
 * @example
 * this._gfnGirdGetPasteData("nexacro");	
*/
pForm._gfnGirdGetPasteData = function (objGrid, browser, callback)
{
	var oForm = this;
	var copyData = "";
	if( browser == "nexacro" || (browser == "IE" && nexacro._BrowserType != "Edge")){
		copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
		oForm.setWaitCursor(true);
		oForm.gfnSetTimer(oForm,
			function() {
				callback(oForm, objGrid, copyData);
				oForm.setWaitCursor(false);
			},5
		);
	}
// 	else if( browser == "Chrome" || browser == "Gecko" || browser == "Opera" ) {	
// 		// https일때만 지원 https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText
// 		navigator.clipboard.readText().then(function(text) { 
// 			copyData = text; 
// 			copyData = new String(copyData); 
// 			callback(oForm, objGrid, copyData); 
// 		});
// 	}
	else {	
		nexacro.getApplication().getActiveForm()._GridCopyPasteInfo = { form: this, grid: objGrid, callback: callback };
		//document.removeEventListener('paste', this._gfnGridPasteCallback);
		document.addEventListener('paste', this._gfnGridPasteCallback);
	}	
	
};

/**
 * @class paste event
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridPasteEvent(obj, e);	
*/
pForm._gfnGridPasteEvent = function (obj, e)
{
	var browser = system.navigatorname;
	var copyData = this._gfnGirdGetPasteData(browser);
	
	if( this.gfnIsNull(copyData)) return;
	
	var colSeperator = "\t";
	var rowData ="";
	if( browser == "nexacro" || browser =="IE"){
		rowData = copyData.split("\r\n");
		if(rowDataCount < 1) {
			e.stopPropagation();
			return;
		}
	}else{
		rowData = copyData.split(/[\n\f\r]/); 
	}
	var rowDataCount = rowData.length - 1;

			
	
	obj.set_enableevent(false);
	obj.set_enableredraw(false); 

	var datasetName = obj.binddataset;
	var ds = obj.getBindDataset();

	ds.set_enableevent(false); 

	var grdCellCount = obj.getCellCount("body");
	var rowCount = ds.getRowCount();
	
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var currRow = startrow;
	var cellIndex = startcol;
	var maxColumnCount = 0;
	var checkIndex = {};	

	for (var i = 0; i < rowDataCount; i++)
	{
		if(rowCount <= currRow)
		{
			ds.addRow();
		}

		var columnData = rowData[i].split(colSeperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) {
			columnLoopCount = grdCellCount;
		}

		if(maxColumnCount < columnLoopCount) {
			maxColumnCount = columnLoopCount;
		}

		var k = 0;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{			
			if(obj.getFormatColProperty(j, "size") == 0) continue;
			var colTemp = obj.getCellProperty("body", j, "text");
			var colid;
			if( this.gfnIsNull(colTemp) )
			{
				colid = obj.getCellProperty("body", j, "text");
			}
			else
			{
				colid = obj.getCellProperty("body", j, "text").substr(5);
			}
			
			var tempValue = columnData[k];
			if(!this.gfnIsNull(tempValue))
			{
				ds.setColumn(currRow, colid, tempValue);
			}
			k++;
		}
		currRow++;
	}

	ds.rowposition = currRow;	

	endrow = endrow + rowDataCount - 1;
	endcol = maxColumnCount - 1;
	
	//system.clearClipboard();

	obj.set_enableredraw(true);
	obj.set_enableevent(true);
	ds.set_enableevent(true); 

	obj.selectArea(startrow, startcol, endrow, endcol);

	e.stopPropagation();
};

/**
 * @class cell copy and paste (크롬용 텍스트에어리어생성)
 * @param {String} innerText- value
 * @return{Object} 텍스트에어리어 오브젝트
 * @example
 * this._createTextarea("꼬부기");	
*/
pForm._createTextarea = function(innerText)
{
	var ta = document.createElement('textarea');
	ta.id = "textAreabyCopyAndPaste";
	ta.style.position = 'absolute';
	ta.style.left = '-1000px';
	ta.style.top = document.body.scrollTop + 'px';
	ta.value = innerText;
	
	document.body.appendChild(ta);
	ta.select();

	return ta;
};

pForm.gfnGridColumnColor = function(objGrid, colnm, color, expr, applyrow) {
	if(applyrow == null) applyrow = false;
	
	if(applyrow == true) {
		var flag_cell = objGrid.getBindCellIndex("body", this.ucFlag);
		var sort_cell = objGrid.getBindCellIndex("body", this.ucSort);
		for(var i = 0; i < objGrid.getCellCount("body"); i++) {
			if(i == flag_cell || i == sort_cell) continue;
			this._grd_column_color(objGrid, i, color, expr);
		}
	} else {
		var cell = objGrid.getBindCellIndex("body", colnm);		
		this._grd_column_color(objGrid, cell, color, expr);
	}
};

pForm._grd_column_color = function(objGrid, cell, color, expr) {
			
	var expr_col = objGrid.getCellProperty("body", cell, "expr_col");
	var expr_newpattern = objGrid.getCellProperty("body", cell, "expr_newpattern");
	var custom_color = expr + " ? '" + color + "{c}' : {x}";
	var custom_color2 = expr + " ? '" + color + "{c}' : ";
	if(expr_col==null) {
		expr_col = "";
	}
	if(expr_newpattern==null) {
		expr_newpattern = "";
	}
	
	if(expr_newpattern.indexOf('{x2}') > 0) {
		expr_newpattern = expr_newpattern.replace(/\{x\}/g, "''");
		expr_newpattern = expr_newpattern.replace(/\{x2\}/g, custom_color2 + "{x2}");
	} else {
		expr_newpattern = expr_newpattern.replace(/\{x\}/g, custom_color);
	}
	expr_newpattern = expr_newpattern.replace(/\{z\}/g, custom_color2);
	
	var expr_cssclass = expr_newpattern;
	if(!this.gfnIsNull(expr_col) && expr_col.length > 0) {
		expr_cssclass = expr_cssclass.replace(/\{x\}/g, "'" + expr_col.join(',') + "'");
		
		if(color.startsWith("BACK_")) {
			for(var k = (expr_col.length-1); k >= 0; k--) {
				if(expr_col[k].startsWith("BACK_")) {
					delete expr_col[k];
				}
			}
		}
		expr_cssclass = expr_cssclass.replace(/\{c\}/g, "," + expr_col.join(','));
	} else {
		expr_cssclass = expr_cssclass.replace(/\{c\}/g, "");
		expr_cssclass = expr_cssclass.replace(/\{x\}/g, "''");
	}
	expr_cssclass = expr_cssclass.replace(/\{x2\}/g, "");
	
	objGrid._getBodyCellInfo(cell).expr_newpattern = expr_newpattern;
	objGrid.setCellProperty("body", cell, "cssclass", expr_cssclass);
};

/*
 *	컬럼명으로 Head 인덱스 가져오기 (바인딩 부분의 헤더)
 *	헤더 두줄이상의 경우 머지 등으로 인해 Index값이 다르기 때문에 사용
 */ 
pForm.gfnGetHeadCellIndex = function(grid, colname) {
	var headIndex = -1;
	for (var i=0, len=grid.getCellCount("head"); i<len; i++) {
		var bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, i);
		var columnName = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);
		if(columnName == colname) {
			headIndex = i;
			break;
		}
	}
	return headIndex;
};

pForm.gfnGetHeadCellIndexes = function(grid, colname) {
	var idxes = [];
	for (var i=0, len=grid.getCellCount("head"); i<len; i++) {
		var bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, i);
		var columnName = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);
		if(columnName == colname) {
			idxes.push(i);
		}
	}
	return idxes;
};

/*
 *	컬럼명으로 Head 인덱스 가져오기
 *  헤더부분 제어시 헤더가 두줄이상인 경우 
 *  바인딩외의 헤더부분은 가져오기 어렵기 때문에 
 *  헤더의 Row를 입력해서 가져온다.
 */ 
pForm.gfnGetHeadRowCellIndex = function(grid, rowIndex, colname) {
	var headIndex = -1;
	for (var i=0, len=grid.getCellCount("head"); i<len; i++) {
		var cellid	= grid.getCellProperty("head", i, "id");
		if(cellid.indexOf("__") == -1 || cellid.indexOf("#") == -1) continue;
		var ds_field = cellid.substring(0,cellid.indexOf("__"));
		ds_field += cellid.substring(cellid.indexOf("#")+1);
		
		if(!this.gfnIsNull(ds_field) && ds_field == (colname+rowIndex)) {
			headIndex = i;
			break;
		}
	}
	return headIndex;
};

/*
 * 그리드 코드파인드 사용자 코드 설정후 명칭등 재로딩을 위한 이벤트
 */
pForm.gfnGridCodeFindLoad = function(objGrid, row, colnm)
{
	if(this.objApp == null) {
		this.objApp = nexacro.getApplication();
	}
	var cell = objGrid.getBindCellIndex("body", colnm);
	var xy = this.gfnConvertXY(this.objApp.mainframe, [20,20], objGrid._getAccessibilityCurrentCell(row,cell));
	objGrid.forceStop = true;
	objGrid._codeFindManual = true;
	this._grd_codefind_popup(objGrid, row, cell, xy[0], xy[1], colnm, false);
	objGrid._codeFindManual = false;
};

/*
 *	Grid 필수값 여부로 Static 텍스트,cssclass 처리
 */ 
pForm.gfnGridRequiredMark = function(objGrid, objComp) {
	if ((objComp instanceof nexacro.Div) == false) return;
	
	var arrColumnInfo = objGrid.usColumnInfo;
	var arrRequired = objGrid.usRequired;
	
	var arrComp = objComp.form.components;
	var nLength = arrComp.length;
	
	var jsonColumnInfo = {};
	var jsonRequiredCol = {};
	for(var h = 0; h < arrColumnInfo.length; h++) {
		var spl_col = arrColumnInfo[h].split(';');
		var colnm = spl_col[0];
		var header = spl_col[1];
		jsonColumnInfo[colnm] = header;
	}
	for(var j = 0; j < arrRequired.length; j++) {
		var spl_req = arrRequired[j].split(';');
		var colnm = spl_req[0];
		var header = spl_req[1];
		jsonRequiredCol[colnm] = header;
	}
	
	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			this.gfnGridRequiredMark(arrComp[i].form);
		}
		// Tab은 각각 처리하는 것으로 
// 		else if (arrComp[i] instanceof nexacro.Tab)
// 		{
// 			var nPages = arrComp[i].tabpages.length;
// 			
// 			for (var j=0; j<nPages;j++)
// 			{	
// 				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
// 				if (this.gfnIsNull(arrComp[i].tabpages[j].url))
// 					this.gfnGridRequiredMark(arrComp[i].tabpages[j].form);
// 			}
// 		}
		else
		{
			if (arrComp[i] instanceof nexacro.Static)
			{
				var id = arrComp[i].id;
				id = id.replace("sta","").replace("lbl","").replace("lb","");
				if(jsonColumnInfo[id] != null) {
					// 그리드 셋팅 헤더로 텍스트 셋팅
					arrComp[i].set_text(jsonColumnInfo[id]);
				}
				if(jsonRequiredCol[id] != null) {
					// 필수체크 처리
					if(arrComp[i].cssclass == "sta_WF_tablelabelT") {
						arrComp[i].set_cssclass("sta_WF_tablelabelTE");
					} else {
						arrComp[i].set_cssclass("sta_WF_tablelabelE");
					}
					//arrComp[i].set_cssclass("sta_WF_SchLabelE");
					
				}
			}
		}
	}
	
};

/*
 * 그리드 체크박스 드래그 멀티선택시 체크 & 해제 처리 
 */
pForm.gfnGridCheckBoxOnMulitiSelected = function(objGrid, colnm)
{
	objGrid._ML_BTN_DRAG = false;
	objGrid._ML_CHK_COL  = colnm;
	objGrid.addEventHandler("onlbuttonup", 	this.gfnGrid_onlbuttonup, 	this);
};

pForm.gfnGrid_onlbuttonup = function(objGrid, e)
{
	if(!objGrid._ML_BTN_DRAG) return;
	objGrid_ML_BTN_DRAG = false;
	
	var strRow = objGrid.selectstartrow[objGrid.selectstartrow.length - 1],
		endRow = objGrid.selectendrow[objGrid.selectendrow.length - 1];
	if(strRow == endRow) return;
	
	var objDs = objGrid.getBindDataset();
	objDs.set_enableevent(false);
	for(var i = strRow; i <= endRow; i++) {
		objDs.setColumn(i,objGrid._ML_CHK_COL, (objDs.getColumn(i,objGrid._ML_CHK_COL) + 1) % 2);
	};
	objDs.set_enableevent(true);
};
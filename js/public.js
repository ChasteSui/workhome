$('.my-modal').on('scroll', function (ev) {
    // console.log($('.my-modal .title').offset().top);
    // console.log($('.my-modal .title').position().top);
    if ($(this).scrollTop() >= 20) {
        $('.my-modal .title').addClass('fixed-title')
    } else {
        $('.my-modal .title').removeClass('fixed-title')
    }
});
$('.my-modal .scroll-box').mCustomScrollbar({
    theme: "my-modal-theme"
});

$('.tab.tree-tab').on('click','.tab-btn',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parent().next().find('.tab-content').hide();
    $($(this).attr('data-src')).show();
});

function scrollBox(obj) {
    var _scroll = 0;
    $(obj).on('mousewheel', function (ev) {
        _scroll += ev.originalEvent.wheelDelta;
        // console.log(_scroll);
        if (_scroll >= 0) {
            _scroll = 0;
        } else if (_scroll < ($(this).height() - $(this).find('.scroll-box').height()) && $(this).height() - $(this).find('.scroll-box').height() < 0) {
            console.log($(this).height() - $(this).find('.scroll-box').height());
            _scroll = $(this).height() - $(this).find('.scroll-box').height();
        } else {
            _scroll = 0;
        }
        $(this).find('.scroll-box').css('transform', 'translateY(' + _scroll + 'px)');
        return false;
    })
}

/**
 * 每页显示条数
 *
 * */
var row = 10;
//console.log(window.screen.width);
if (window.screen.width > 1500) {
    row = 15;
}
/**
 * 下拉框
 * */
$('body').on('click', '.dropdown>a', function () {
    var _this = $(this);
    if (_this.next('.dropdown-menu').css('display') == 'block') {
        _this.next('.dropdown-menu').hide();
        $('.backdrop.xl').remove();
    } else {
        _this.next('.dropdown-menu').show();
        $('.dropdown-menu>li>a').on('click', function () {
            _this.next('.dropdown-menu').hide();
            $('.backdrop.xl').remove();
        });
        $('body').append('<div class="backdrop xl"></div>');
        $('.backdrop.xl').on('click', function () {
            _this.next('.dropdown-menu').hide();
            $(this).remove();
        })
    }
});
$.fn.extend({
    /**
     *
     * table显示筛选条件
     * */
    showFilter: function (ev) {
        $(this).show().css({
            left: ev.pageX,
            top: ev.pageY
        });
        var _this = $(this);
        $('body').append('<div class="backdrop filter"></div>');
        $('.backdrop.filter').on('click', function () {
            $(this).remove();
            _this.hide()
        })
    },
    /**
     *  隐藏筛选条件
     * */
    hideFilter:function () {
        $(this).hide();
        $('body .backdrop.filter').remove();
    },
    /**
     *
     * 显示模态窗口
     *
     * */
    showModal: function (width) {
        $(this).show().css('width', !!width ? width : '380px').animate({
            right: 0
        }, 200);
        $(this).find('.modal-footer').css('width', !!width ? width : '380px').animate({
            right: 0
        }, 200);
        $('body').append('<div class="backdrop modal"></div>');
    },
    /**
     *
     * 隐藏模态窗口
     * */
    hideModal: function () {
        $(this).animate({
            right: -250
        }, 100, function () {
            $('.my-modal').hide();
        });
        $(this).find('.modal-footer').animate({
            right: -250
        }, 100);
        $('body .backdrop.modal').remove();
    },
    /**
     *
     * 左侧左右拖动
     *
     * */
    drag_l_r: function (leftObj, rightObj) {
        $(this).on('mousedown', function () {
            var _this = $(this);
            $(document).on('mousemove', function (ev) {
                $('body').addClass('enable-select');
                var _width = ev.pageX - _this.parent().offset().left - 2;
                if (_width < 6) {
                    _width = 6;
                }
                $(leftObj).css('width', _width);
                if (rightObj != '' && rightObj != null) {
                    $(rightObj).css('left', _width)
                }
            });
            $(document).on('mouseup', function () {
                $('body').removeClass('enable-select');
                $(document).off('mousemove');
            })
        });
    },
    /**
     * 右侧左右拖动
     *
     * */
    drag_modal: function (obj) {
        $(this).on('mousedown', function (ev) {
            var _this = $(this);
            var start = ev.pageX;
            var init_width = $(obj).width();
            var fixed_footer = $(obj).find('.modal-footer');
            $(document).on('mousemove', function (ev) {
                $('body').addClass('enable-select');
                var _width = init_width + start - ev.pageX;
                if (_width < 6) {
                    _width = 6;
                }
                $(obj).css('width', _width);
                fixed_footer?fixed_footer.css('width',_width):'';
                /*if (rightObj != '' && rightObj != null) {
                    $(rightObj).css('left', _width)
                }*/
            });
            $(document).on('mouseup', function () {
                $('body').removeClass('enable-select');
                $(document).off('mousemove');
            })
        });
    },
    /**
     * 上下拖拽改变高度
     * */
    moveHeight: function (topObj, bottomBoj) {
        $(this).on('mousedown', function () {
            var _this = $(this);
            $(document).on('mousemove', function (ev) {
                $('body').addClass('enable-select-h');
                var _height = ev.pageY - _this.parent().offset().top + 2;
                if (_height < 36) {
                    _height = 36;
                }
                $(topObj).css('height', _height);
                if (bottomBoj != '' && bottomBoj != null) {
                    $(bottomBoj).css('top', _height)
                }
            });
            $(document).on('mouseup', function () {
                $('body').removeClass('enable-select-h');
                $(document).off('mousemove');
            })
        });
    },
    /**
     * 自定义select
     *
     * */
    mySelect: function () {
        $(this).find('input').on('click', function () {
            _this = $(this).parent();
            _this.find('.option').show();
            $('body').append('<div class="backdrop"></div>');
            _this.find('.option li').on('click', function () {
                _this.find('input').val($(this).html());
                _this.find('.option').hide();
                $('.backdrop').remove();
            });
            $('.backdrop').on('click', function () {
                _this.find('.option').hide();
                $('.backdrop').remove();
            })
        });
    },
    /**
     * 显示全屏模态窗口
     * */
    showBtspModal: function () {
        // console.log($(this));
        _this = $(this);
        $(this).show();
        $('body').addClass('alert-back-c').append('<div class="backdrop b"></div>');
        $('body', parent.document).addClass("alert-back").append('<div class="backdrop"></div>')
        $(this).find('.modal-header .close').one('click', function () {
            _this.hideBtspModal();
        })
    },
    /**
     * 隐藏全屏模态窗口
     * */
    hideBtspModal: function () {
        $(this).hide();
        $('body').removeClass('alert-back-c').find('.backdrop.b').remove();
        $('body', parent.document).removeClass('alert-back').find('.backdrop').remove();
    },
    /**
     * 下拉树形结构
     *树id、数据、单选或多选、是否simpleData、能够选择的节点类型、显示值、返回值
     * */
    selectTree: function (treeId, data, type, simpleData, selectNodeType,showField,returnField) {
        var _this = $(this);
        _this.find('input').off('click');
        $.fn.zTree.destroy(treeId);
        _this.find('.tree-wrap').mCustomScrollbar('destroy');
        var multi;
        if (type == 'radio') {
            multi = false;
        } else {
            multi = true;
        }
        var setting = {
            view: {
                showLine: false,
                showIcon: false,
                selectedMulti: multi,
                dblClickExpand: true,
                addDiyDom: addDiyDom
            },
            data: {
                simpleData: {
                    enable: simpleData
                }
            },
            callback: {
                // beforeClick: beforeClick
                onClick: clickFun
            }
        };

        function addDiyDom(treeId, treeNode) {
            var spaceWidth = 5;
            var switchObj = $("#" + treeNode.tId + "_switch"),
                icoObj = $("#" + treeNode.tId + "_ico");
            switchObj.remove();
            icoObj.before(switchObj);

            if (treeNode.level > 1) {
                var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
                switchObj.before(spaceStr);
            }
        }

        function clickFun(ev, treeId, treeNode) {
            if (type == 'radio') {
                if (selectNodeType) {
                    if (treeNode[selectNodeType.key] == selectNodeType.value) {
                        if(showField != null && showField != ''){
                            _this.find('input').val(treeNode[showField]);
                        }else{
                            _this.find('input').val(treeNode.name);
                        }
                        if(returnField != null && returnField != ''){
                            _this.find('input').attr('data-id', treeNode[returnField]);
                        }else{
                            _this.find('input').attr('data-id', treeNode.id);
                        }
                        _this.find('input').change();
                        _this.find('.tree-wrap').hide();
                        $('body .backdrop.select-tree').remove();
                    }
                } else {
                    if(showField != null && showField != ''){
                        _this.find('input').val(treeNode[showField]);
                    }else{
                        _this.find('input').val(treeNode.name);
                    }
                    if(returnField != null && returnField != ''){
                        _this.find('input').attr('data-id', treeNode[returnField]);
                    }else{
                        _this.find('input').attr('data-id', treeNode.id);
                    }
                    _this.find('input').change();
                    _this.find('.tree-wrap').hide();
                    $('body .backdrop.select-tree').remove();
                }
            } else {

            }

        }

        $.fn.zTree.init($('#' + treeId), setting, data);
        _this.find('input').on('click', function () {
            if (_this.find('.tree-wrap').css('display') == 'none') {
                _this.find('.tree-wrap').css('display', 'block');
                _this.find('.tree-wrap').mCustomScrollbar({
                    axis: "yx",
                    theme: "my-select-table-theme",
                    advanced: {
                        updateOnContentResize: true
                    }
                });
                $('body').append('<div class="backdrop select-tree"></div>');
                $('body .backdrop.select-tree').on('click', function () {
                    _this.find('.tree-wrap').hide();
                    $('body .backdrop.select-tree').remove();
                })
            } else {
                _this.find('.tree-wrap').hide();
                $('body .backdrop.select-tree').remove();
            }
        })
    },
    /**
     * 下拉异步树
     *  @url 异步加载路径
     *  @dataKey ajax返回数据key
     *
     * */
    selectAjaxTree: function (treeId, data, type, simpleData, appendChildNode, selectNodeType) {//树id、数据、单选或多选、是否simpleData、能够选择的节点类型
        var _this = $(this);
        _this.find('input').off('click');
        $.fn.zTree.destroy(treeId);
        _this.find('.tree-wrap').mCustomScrollbar('destroy');
        var multi;
        if (type == 'radio') {
            multi = false;
        } else {
            multi = true;
        }
        var setting = {
            view: {
                showLine: false,
                showIcon: false,
                selectedMulti: multi,
                dblClickExpand: true,
                addDiyDom: addDiyDom
            },
            data: {
                simpleData: {
                    enable: simpleData
                }
            },
            callback: {
                // beforeClick: beforeClick
                onClick: clickFun,
                beforeExpand: appendChildNode
            }
        };

        function addDiyDom(treeId, treeNode) {
            var spaceWidth = 5;
            var switchObj = $("#" + treeNode.tId + "_switch"),
                icoObj = $("#" + treeNode.tId + "_ico");
            switchObj.remove();
            icoObj.before(switchObj);

            if (treeNode.level > 1) {
                var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
                switchObj.before(spaceStr);
            }
        }

        function clickFun(ev, treeId, treeNode) {
            if (type == 'radio') {
                if (selectNodeType) {
                    if (treeNode[selectNodeType.key] == selectNodeType.value) {
                        _this.find('input').val(treeNode.name).attr('data-id', treeNode.id).change();
                        _this.find('.tree-wrap').hide();
                        $('body .backdrop.select-tree').remove();
                    }
                } else {
                    _this.find('input').val(treeNode.name).attr('data-id', treeNode.id).change();
                    _this.find('.tree-wrap').hide();
                    $('body .backdrop.select-tree').remove();
                }
            } else {

            }

        }

        $.fn.zTree.init($('#' + treeId), setting, data);
        _this.find('input').on('click', function () {
            if (_this.find('.tree-wrap').css('display') == 'none') {
                _this.find('.tree-wrap').css('display', 'block');
                _this.find('.tree-wrap').mCustomScrollbar({
                    axis: "yx",
                    theme: "my-select-table-theme",
                    advanced: {
                        updateOnContentResize: true
                    }
                });
                $('body').append('<div class="backdrop select-tree"></div>');
                $('body .backdrop.select-tree').on('click', function () {
                    _this.find('.tree-wrap').hide();
                    $('body .backdrop.select-tree').remove();
                })
            } else {
                _this.find('.tree-wrap').hide();
                $('body .backdrop.select-tree').remove();
            }
        })
    },
    /**
     *
     * 自定义选项卡
     *
     * */
    tab: function () {
        var _this = $(this);
        var _init_panel = _this.find('.tab-title.active').attr('href');
        _this.find(_init_panel).show();
        $(this).find('.tab-title').on('click', function () {
            var tab_panel = $(this).attr('href');
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            _this.find('.tab-pane').hide();
            _this.find(tab_panel).show();
        })
    }

});
$.extend({
    showAlert: function (type, msg, obj) {
        var btn_html = '';
        if (type == 'confirm') {
            btn_html = '<span class="btn btn-cancel">取消</span><span class="btn btn-sure">确定</span>';
        } else {
            btn_html = '<span class="btn btn-sure">确定</span>';
        }
        $('body', parent.document).addClass('alert-back').append('<div class="backdrop alert-b"></div>');
        $('body').addClass('alert-back-c').append('<div class="backdrop b alert-b"></div>').append('<span class="show-f"></span>');
        $('body').append('<div class="my-alert ' + type + '">' +
            '<div class="alert-head"><span class="alert-icon"></span><span class="alert-title">提示</span></div>' +
            '<div class="alert-content">' + msg + '</div>' +
            '<div class="alert-footer">' + btn_html + '</div>' +
            '</div>');
        $('.my-alert .btn-sure').on('click', function () {
            $('body', parent.document).removeClass('alert-back').find('.backdrop.alert-b').remove();
            $('body').removeClass('alert-back-c').find('.backdrop.b.alert-b').remove();
            $('body').find('.show-f').remove();
            $('body').find('.my-alert').remove();
            if (obj != null) {
                if (obj.ok != null && obj.ok != '') {
                    obj.ok();
                }
            }
        });
        $('.my-alert .btn-cancel').on('click', function () {
            $('body', parent.document).removeClass('alert-back').find('.backdrop.alert-b').remove();
            $('body').removeClass('alert-back-c').find('.backdrop.b.alert-b').remove();
            $('body').find('.show-f').remove();
            $('body').find('.my-alert').remove();
            if (obj != null) {
                if (obj.cancel != null && obj.cancel != '') {
                    obj.cancel();
                }
            }
        })

    },
    /**
     * 获取地址栏参数
     *
     * */
    getParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]);
        return null; //返回参数值
    },
    delNull: function (str) {
        if (str != null) {
            return str;
        } else {
            return '';
        }
    }
});


/**
 * 全选功能
 *
 * @param checkbox
 *            当前点击的复选框
 * @param checkboxName
 *            需要选中的复选框
 */
function selectAll(checkbox, checkboxName) {
    var checked = $(checkbox).is(":checked");
    if (checked) {
        $.checkboxAll(checkboxName);
    } else {
        $.clearSelect(checkboxName);
    }
}

/**
 * 判断是否选中全选按钮
 *
 * @param checkedAll
 *            全选复选框的name值
 * @param checkboxName
 *            单选复选框的name值
 */
function isCheckedAll(checkedAll, checkboxName) {
    var allNum = $("[name=" + checkboxName + "]").length;
    var checkedNum = $.getCheckCount("checkboxName");
    if (parseInt(allNum) == parseInt(checkedNum)) {
        $("[name=" + checkedAll + "]").prop("checked", true);
    } else {
        $("[name=" + checkedAll + "]").prop("checked", false);
    }
}

// 获取表格中复选框选中的值（单选）
function getCheckBoxValue(tableId) {
    var checkVal = "";
    $("#" + tableId + " tbody tr").each(function () {
        var input = $(this).find("td").eq(0).find("input");
        if ($(input).prop("checked")) {
            checkVal = $(input).val();
        }
    });
    return checkVal;
}

// 获取表格中复选框选中的值（多选）
function getCheckBoxArrVal(tableId) {
    var checkVal = new Array();
    $("#" + tableId + " tbody tr").each(function () {
        var input = $(this).find("td").eq(0).find("input");
        if ($(input).prop("checked")) {
            checkVal.push($(input).val());
        }
    });
    return checkVal;
}

/**
 * 扩展Date的format方法
 *
 */
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/**
 * 转换日期对象为日期字符串
 *
 * @param date
 *            日期对象
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2013-12-06 01:05:04" 为false时, 格式如
 *            "2013-12-06"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDate(date, isFull) {
    var pattern = "";
    if (isFull == true || isFull == undefined) {
        pattern = "yyyy-MM-dd hh:mm:ss";
    } else {
        pattern = "yyyy-MM-dd";
    }
    return getFormatDate(date, pattern);
}

/**
 * 转换long值为日期字符串
 *
 * @param l
 *            long值
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2013-12-06 01:05:04" 为false时, 格式如
 *            "2013-12-06"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDateByLong(long, isFull) {
    return getSmpFormatDate(new Date(long), isFull);
}

/**
 * 转换日期对象为日期字符串
 *
 * @param l
 *            long值
 * @param pattern
 *            格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */
function getFormatDate(date, pattern) {
    if (date == undefined) {
        date = new Date();
    }
    if (pattern == undefined) {
        pattern = "yyyy-MM-dd hh:mm:ss";
    }
    return date.format(pattern);
}
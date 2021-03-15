/**
 * @description 
 * @since Thursday, 3 4th 2021, 15:57:19 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import Alert, { PropsAlert } from './Alert';
import Avatar, { PropsAvatar } from './Avatar';
import Badge, { PropsBadge } from './Badge';
import Breadcrumb, { PropsBreadcrumb } from './Breadcrumb';
import Button, { PropsButton } from './Button';
import ButtonGroup, { PropsButtonGroup } from './ButtonGroup';
import Checkbox, { PropsCheckbox } from './Checkbox';
import { ColorCode, PropsColorCode } from './Color';
import { ColorClass, PropsColorClass } from './Color';
import Dropdown, { PropsDropdown } from './Dropdown';
import EmptyState, { PropsEmptyState } from './EmptyState';
import Error, { PropsError } from './Error';
import Container, { PropsContainer } from './Layout/Container';
import Row, { PropsRow } from './Layout/Row';
import Col, { PropsCol } from './Layout/Column';
import Loading, { PropsLoading } from './Loading';
import Nav, { PropsNav, TabContent, TabPane } from './Nav';
import Pagination, { PropsPagination } from './Pagination';
import Radio, { PropsRadio } from './Radio';
import Switch, { PropsSwitch } from './Switch';
import Typography, { PropsTypography } from './Typography';
import Shadow, { PropsShadow } from './Shadow';
import Input, { PropsInput } from './Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/style.css';
import '../public/css/color.css';

export {
	Alert, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Checkbox, ColorCode, EmptyState, Error, Container,
	Row, Col, Loading, Nav, TabContent, TabPane, Pagination, Radio, Switch, Dropdown, ColorClass, Typography, Shadow,
	Input
};

export type {
	PropsAlert, PropsAvatar, PropsBadge, PropsBreadcrumb, PropsButton, PropsButtonGroup, PropsCheckbox, PropsColorCode,
	PropsEmptyState, PropsError, PropsContainer, PropsRow, PropsCol, PropsLoading, PropsNav, PropsPagination,
	PropsRadio, PropsSwitch, PropsDropdown, PropsColorClass, PropsTypography, PropsShadow, PropsInput
};

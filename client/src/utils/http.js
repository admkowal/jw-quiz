import axios from 'axios';
import { toast } from 'react-toastify';
import { isDefined, isStringDefined, isFunction } from './is-defined';

const DEFAULT_ERROR_MSG = 'An error occured';
export const GET = 'get';
export const POST = 'post';
export const DELETE = 'delete';
export const PUT = 'put';

export function request({
  type = GET,
  url,
  config = {},
  successMsg,
  failMsg,
  progressMsg
}) {
  let processNotifyId = null;
  if (isStringDefined(progressMsg)) {
    processNotifyId = toast.info(progressMsg);
  }
  try {
    return axios[type](url, config)
      .then(response => {
        if (isDefined(successMsg)) {
          const msg = isFunction(successMsg) ? successMsg(response) : successMsg;
          toast.success(msg);
        }
        return response;
      })
      .catch(e => handleError(e, failMsg));
  } catch (e) {
    console.warn(e);
    toast.error(DEFAULT_ERROR_MSG);
  }

  if (isDefined(processNotifyId)) {
    toast.dismiss(processNotifyId);
  }
}

function handleError(e, failMsg = '') {
  console.warn(e);
  if (isDefined(e.response)) {
    toast.error(`${DEFAULT_ERROR_MSG}: ${e.response.status} ${failMsg}`);
  } else if (isDefined(e.request)) {
    toast.error(`${DEFAULT_ERROR_MSG}: No response was received`);
  } else {
    toast.error(DEFAULT_ERROR_MSG);
  }
  return e;
}
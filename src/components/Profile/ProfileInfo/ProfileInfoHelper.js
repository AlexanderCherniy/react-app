const noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'

export const UsedOrNoUsedZoom = (useZoom, incClass) => {
    if (useZoom === true) {
      return incClass.usedZoomImg
    } else {
      return incClass.noUsedZoomImg
    }
}
export  const NoPhoto = (smallPhoto) => {
    if (smallPhoto === null) {
      return noPhoto
    } else {
      return smallPhoto
    }
}
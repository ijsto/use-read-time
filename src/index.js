const estimateReadTimeMinutes = (props = {}) => {
  const { text, wpm } = props

  if (!wpm) throw new Error('Word Per Minute (wpm) was not provided.')
  if (!text) throw new Error('Estimator received no text.')

  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)

  return time
}

/**
 * `useReadTime`
 *
 * @param {String} text Text to calculate the amount of reading minutes for.
 * @param {Int} wpm Number representing the word per minute to calculate the estimate time to read.
 * @param {String} speed Enum (`fast`, `normal`, `slow`) indicating the reading speed.
 *
 * @returns {Object} readTime, readTimeInfo, readTimeLabel (see README).
 */
export const useReadTime = ({ text, speed, wpm: externalWpm }) => {
  if (!text) {
    return { error: 'Missing text to evaluate.', readTime: null }
  }

  const fastReadingSpeedWpm = 240
  const normalReadingSpeedWpm = 180
  const slowReadingSpeedWpm = 100

  const defaultReadingSpeedWpm = externalWpm || normalReadingSpeedWpm

  const wpm = speed === 'fast'
      ? fastReadingSpeedWpm
      : speed === 'normal'
        ? normalReadingSpeedWpm
        : speed === 'slow'
          ? slowReadingSpeedWpm
          : defaultReadingSpeedWpm

  const estimatedReadTime = estimateReadTimeMinutes({ text, wpm })

  const fastReaderShortText = 90
  const normalReaderShortText = 70
  const slowReaderShortText = 50

  const readerSpeed =
    wpm >= fastReadingSpeedWpm ||
    (wpm < fastReadingSpeedWpm && wpm > normalReadingSpeedWpm)
      ? 'fast'
      : wpm < normalReadingSpeedWpm && wpm > slowReadingSpeedWpm
        ? 'normal'
        : wpm <= slowReadingSpeedWpm && 'slow'

  const isFewWords =
    readerSpeed === 'fast' && text < fastReaderShortText
      ? readerSpeed === 'normal' && text < normalReaderShortText
      : readerSpeed === 'slow' && text < slowReaderShortText

  const readTimeLabel = `${estimatedReadTime} min${
    estimatedReadTime === 1 ? '' : 's'
  } read`
  const readTimeInfo = isFewWords
    ? 'Less than a minute.'
    : `Around ${estimatedReadTime} minute${
      estimatedReadTime === 1 ? '' : 's'
    }.`

  return { readTime: estimatedReadTime, readTimeInfo, readTimeLabel }
}

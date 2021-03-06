import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Icon, InputAdornment } from '@material-ui/core';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    display: 'block',
    margin: `${theme.spacing(1)}px 0`,
  },
  picker: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  icon: {
    top: theme.spacing(1)
  }
});

class DateTimeInput extends PureComponent {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-center"
          justify="space-around"
          direction="row"
          // spacing={3}
        >
          <Grid
            item
            md={0}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Estimatation Date of completion</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  value={selectedDate}
                  disablePast
                  onChange={this.handleDateChange}
                  label="DateTimePicker"
                  position='right'
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className={classes.picker}>
              {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  disableFuture
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  label="24h clock"
                />
              </MuiPickersUtilsProvider> */}
            </div>
          </Grid>
          <Grid
            item
            md={0}
            className={classes.demo}
          >
            {/* <Typography variant="button" className={classes.divider}>Customization</Typography>
            <div className={classes.picker}> */}
              {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  showTabs={false}
                  disableFuture
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  helperText="Hardcoded helper text"
                  leftArrowIcon={<Icon> add_alarm </Icon>}
                  rightArrowIcon={<Icon> snooze </Icon>}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton className={classes.icon}>
                          <Icon>add_alarm</Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider> */}
            {/* </div> */}
            {/* <div className={classes.picker}> */}
              {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  label="Keyboard input"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  format="YYYY/MM/DD hh:mm A"
                  mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                />
              </MuiPickersUtilsProvider> */}
            {/* </div> */}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

DateTimeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateTimeInput);

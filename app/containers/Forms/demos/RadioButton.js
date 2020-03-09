import React, { Fragment, PureComponent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { isThisWeek } from 'date-fns';


const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    display: 'block',
    margin: `${theme.spacing(0)}px 0`,
  },
  field: {
    margin: `${theme.spacing(4)}px 5px`,
  },
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: `${theme.spacing(0)}px 0`,
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
});

class RadioButton extends PureComponent {
  state = {
    value: '',
    selectedValue: '',
    input :''  
  };

  handleChange = event => {
    this.setState({ value: event.target.value});
    console.log(event.target.value , "this is the radio")
    
  };

  handleChangeOther = event => {
    this.setState({ selectedValue: event.target.value });
    

  };

  render() {
    
    
    

    

    const { classes } = this.props;
    const { value, selectedValue } = this.state;
    return (
      <Fragment>

      

        {/* <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
           spacing={2}
        > */}
          <Grid
            // item
             md={12}
            item
            alignItems="flex-start"
            justify="space-around"
            direction="row"
            className={classes.demo}
            spacing={2}
          >
            <Typography variant="button" className={classes.divider}>Select Priority</Typography>
            {/* <Typography className={classes.divider}>Select Priority</Typography> */}
            {/* <div>
              <Grid
                container
                alignItems="flex-start"
                justify="space-around"
                direction="row"
                spacing={3}
              > */}
                {/* <Grid
                  item
                  md={7}
                  className={classes.demo}
                > */}
                   {/* <FormControl component="fieldset" required className={classes.formControl}> 
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      className={classes.group}
                      value={value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                      />
                    </RadioGroup>
                  </FormControl>   */}
                {/* </Grid> */}
                <Grid
                  item
                  md={6}
                  className={classes.demo}
                > 
                   <FormControl component="fieldset" required error className={classes.formControl}> 
                    {/* <FormLabel component="legend">Select Priority</FormLabel> */}
                    <RadioGroup
                      aria-label="gender"
                      name="gender2"
                      className={classes.group}
                      value={value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel value="High" control={<Radio color="primary" />} label="High" />
                      {/* <FormControlLabel value="Medium" control={<Radio color="primary" />} label="Medium" /> */}
                      <FormControlLabel value="Low" control={<Radio color="primary" />} label="Low" />
                      {/* <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                      /> */}
                    </RadioGroup>
                    {/* <FormHelperText>You can display an error</FormHelperText> */}
                  </FormControl>
                 </Grid>
              </Grid>
            {/* </div>
          </Grid>
          <Grid
            item
            md={1}
            className={classes.demo}
          >
            <div>
               <Typography variant="button" className={classes.divider}>Radio without label</Typography>
               <Typography className={classes.divider}>Select Priority</Typography>
               <Radio 
                checked={selectedValue === 'high'}
                onChange={this.handleChangeOther}
                value="high"
                name="radio-button-demo"
                aria-label="A"
                text='high'
              /><Typography className= {classes.demo}><b>High</b></Typography>
           
              <Radio
                checked={selectedValue === 'low'}
                onChange={this.handleChangeOther}
                value="low"
                name="radio-button-demo"
                aria-label="B"
              />
               <Typography><b>Low</b></Typography>
               <Radio
                checked={selectedValue === 'c'}
                onChange={this.handleChangeOther}
                value="c"
                name="radio-button-demo"
                aria-label="C"
                />
               
               <Radio
                checked={selectedValue === 'd'}
                onChange={this.handleChangeOther}
                value="d"
                color="default"
                name="radio-button-demo"
                aria-label="D"
              />
              <Radio
                checked={selectedValue === 'e'}
                onChange={this.handleChangeOther}
                value="e"
                color="default"
                name="radio-button-demo"
                aria-label="E"
                className={classes.size}
                icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
              />
             </div> */}
          {/* </Grid> */}
        {/* </Grid> */}

        {(this.state.vale)? <Button className={className}  onClicked= {this.onClicked}><span>Add</span>
                {/* <Chip label={intl.formatMessage(messages.hint)} className={classes.chip} /> */}
          </Button>:""}
      </Fragment>
    );
  }
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButton);

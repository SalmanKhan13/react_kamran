import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div class="content clearfix">
	<div class="home-journey clearfix">
		<div class="container-fluid padding">
			<div class="row margin journey-row">
				<div class="col-sm-6 col-md-6 padding journey-col">
			
					<div class="journey-left clearfix">
						<div class="journey-contect clearfix">
						
							<div class="journey-title clearfix">
								<h2>YOUR JOURNEY WITH US FIND PERFECT TRIP</h2>
							</div>
			
							<div class="journey-tab clearfix">
								<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
									<ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
										<li role="presentation" class="active">
											<a href="#oneway" id="oneway-tab" role="tab" data-toggle="tab" aria-controls="oneway" aria-expanded="true"> <span class="text">One Way</span> </a>
										</li>
										<li role="presentation" class="next">
											<a href="#return" role="tab" id="return-tab" data-toggle="tab" aria-controls="return">
												<span class="text">Return</span> </a>
										</li>
										<li role="presentation">
											<a href="#multicity" role="tab" id="multicity-tab" data-toggle="tab" aria-controls="multicity">
												<span class="text">Multicity</span> </a>
										</li>
									</ul>
									
									<div id="myTabContent" class="tab-content">
										<div role="tabpanel" class="tab-pane fade in active" id="oneway" aria-labelledby="oneway-tab">
										
											<div class="h-form-section clearfix">
											
												<div class="custom-radio">
													<div class="row">
														<div class="col-sm-6 col-md-6">
															<div class="radio">
																 <label class="radio">
																 	<input type="radio" name="releated" value="yes" />
																 	<span> Domestic </span>
																 </label>
															</div>
														</div>
														<div class="col-sm-6 col-md-6">
															<div class="radio">
																<label class="radio">
																	<input type="radio" name="releated" value="NO" />>
																	<span>International </span>
																</label>
															</div>
														</div>
													</div>
												</div>
											
												<div class="h-form clearfix">
													<form>
														<div class="row">
															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Origin</label>
																	<input type="text" class="form-control" placeholder="Origin" />
																</div>
															</div>

															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Destination</label>
																	<input type="text" class="form-control" placeholder="Destination" />
																</div>
															</div>

															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Departure Date</label>
																	<input type="text" name="" class="form-control datepicker" value="DD/MM/YYYY" />
																	<span class="calender-icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
																</div>
															</div>

															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Return Date</label>
																	<input type="text" name="" class="form-control datepicker" value="DD/MM/YYYY" />
																	<span class="calender-icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Adult</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(12 Yrs +)</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Child</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(02 - 11 Yrs )</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Infants</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(Below 2 Yrs )</label>
																</div>
															</div>

														

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Stop</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>None Stop</option>
																			<option>One Stop</option>
																			<option>2+ stops</option>
																		</select>
																	</div>
																</div>
															</div>

															<div class="col-sm-4 col-md-4"></div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Cabin Class</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>Economic</option>
																			<option>Premium Economic</option>
																			<option>Business</option>
																			<option>First</option>
																		</select>
																	</div>
																</div>
															</div>
															
															<div class="col-sm-12 col-md-12">
																<div class="h-airline clearfix">
															
																	<div class="airline-title clearfix">
																		<div class="airline-left clearfix">
																			<h6>airline</h6>
																		</div>
																		
																		<div class="airline-right airlinr-right-one clearfix">
																			<a href="#" class="select-all-check">Select All</a>
																			<a href="#" class="unselect-all-check">unselect all</a>
																		</div>
																	</div>
																
																	<div class="ariline-name ariline-name-one clearfix">
																		<div class="check-box clearfix">
																			<div class="row">
																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="one_one" />
																								<label for="one_one">Spice jet</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="one_two" />
																								<label for="one_two">Jet Airways</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="one_three" />
																								<label for="one_three">British Airways </label>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="one_four" />
																								<label for="one_four">Emirates</label>
																							</div>
																						</div>
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="one_five" />
																								<label for="one_five">Air India</label>
																							</div>
																						</div>
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="one_six" />
																								<label for="one_six">Indigo</label>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single gds-single">
																								<input type="checkbox" class="input-open-one" id="one_seven" />
																								<label for="one_seven">GDS</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="form-group gds-txt-one hidden">
																								<input type="text" class="form-control" />
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																
																</div>
															</div>

															<div class="col-sm-12 col-md-12">
																<div class="s-btn clearfix">
																	<a class="btn btn-default" href="listing-one-way.html" target="_blank" role="button">search now</a>
																</div>
															</div>
														</div>
													</form>
												</div>
											
											</div>
									
										</div>
										
										<div role="tabpanel" class="tab-pane fade" id="return" aria-labelledby="return-tab">
										
											<div class="h-form-section clearfix">
								
												<div class="custom-radio">
													<div class="row">
														<div class="col-sm-6 col-md-6">
															<div class="radio">
																<label class="radio">
																	<input type="radio" name="releated" value="yes" />
																	<span> Domestic </span>
																</label>
															</div>
														</div>
														<div class="col-sm-6 col-md-6">
															<div class="radio">
																<label class="radio">
																	<input type="radio" name="releated" value="NO" />
																	<span>International </span>
																</label>
															</div>
														</div>
													</div>
												</div>
												
												<div class="h-form clearfix">
													<form>
														<div class="row">
															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Origin</label>
																	<input type="text" class="form-control" placeholder="Origin" />
																</div>
															</div>

															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Destination</label>
																	<input type="text" class="form-control" placeholder="Destination" />
																</div>
															</div>

															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Departure Date</label>
																	<input type="text" name="" class="form-control datepicker" value="DD/MM/YYYY" />
																	<span class="calender-icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
																</div>
															</div>

															<div class="col-sm-6 col-md-6">
																<div class="form-group">
																	<label>Return Date</label>
																	<input type="text" name="" class="form-control datepicker" value="DD/MM/YYYY" />
																	<span class="calender-icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Adult</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(12 Yrs +)</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Child</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(02 - 11 Yrs )</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Infants</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(Below 2 Yrs )</label>
																</div>
															</div>


															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Stop</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>None Stop</option>
																			<option>One Stop</option>
																			<option>2+ stops</option>
																		</select>
																	</div>
																</div>
															</div>

															<div class="col-sm-4 col-md-4"></div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Cabin Class</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>Economic</option>
																			<option>Premium Economic</option>
																			<option>Business</option>
																			<option>First</option>
																		</select>
																	</div>
																</div>
															</div>

															<div class="col-sm-12 col-md-12">
																<div class="h-airline clearfix">
															
																	<div class="airline-title clearfix">
																		<div class="airline-left clearfix">
																			<h6>airline</h6>
																		</div>

																		<div class="airline-right airlinr-right-two clearfix">
																			<a href="#" class="select-all-check">Select All</a>
																			<a href="#" class="unselect-all-check">unselect all</a>
																		</div>
																	</div>
															
																	<div class="ariline-name ariline-name-two clearfix">
																		<div class="check-box clearfix">
																			<div class="row">
																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="r_one" />
																								<label for="r_one">Spice jet</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="r_two" />
																								<label for="r_two">Jet Airways</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="r_three" />
																								<label for="r_three">British Airways </label>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="r_four" />
																								<label for="r_four">Emirates</label>
																							</div>
																						</div>
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="r_five" />
																								<label for="r_five">Air India</label>
																							</div>
																						</div>
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="r_six" />
																								<label for="r_six">Indigo</label>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" class="input-open-two" id="r_seven" />
																								<label for="r_seven">GDS</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="form-group gds-txt-two hidden">
																								<input type="text" class="form-control" />
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
															
																</div>
															</div>

															<div class="col-sm-12 col-md-12">
																<div class="s-btn clearfix">
																	<a class="btn btn-default" href="listing-returnlisting.html" target="_blank" role="button">search now</a>
																</div>
															</div>
														</div>
													</form>
												</div>
											
											</div>
										
										</div>

										<div role="tabpanel" class="tab-pane fade" id="multicity" aria-labelledby="multicity-tab">
										
											<div class="h-form-section clearfix">
											
												<div class="custom-radio">
													<div class="row">
														<div class="col-sm-6 col-md-6">
															<div class="radio">
																<label class="radio">
																	<input type="radio" name="releated" value="yes" />
																	<span> Domestic </span>
																</label>
															</div>
														</div>
														<div class="col-sm-6 col-md-6">
															<div class="radio">
																<label class="radio">
																	<input type="radio" name="releated" value="NO" />
																	<span>International </span>
																</label>
															</div>
														</div>
													</div>
												</div>
											
												<div class="h-form clearfix">
													<form>
														<div class="row">
														
															<div class="multicity-open clearfix">
																<div class="clone-inner-main">
																	<div class="multicity-inner clearfix">
																		<div class="col-sm-4 col-md-4">
																			<div class="form-group">
																				<label>Origin</label>
																				<input type="text" class="form-control" placeholder="Origin" />
																			</div>
																		</div>
																		

																		<div class="col-sm-4 col-md-4">
																			<div class="form-group">
																				<label>Destination </label>
																				<input type="text" class="form-control" placeholder="Destination " />
																			</div>
																		</div>

																		<div class="col-sm-4 col-md-4">
																			<div class="form-group">
																				<label>Departure Date</label>
																				<input type="text" name="" class="form-control datepicker" value="DD/MM/YYYY" />
																				<span class="calender-icon"><i class="fa fa-calendar" aria-hidden="true"></i></span>
																			</div>
																		</div>

																
																		<div class="close-clone-city clearfix">
																			<a href="#" id="close-city"><span>×</span></a>
																		</div>
																	
																	</div>
																</div>

																<div class="col-lg-12 col-md-12 col-sm-12">
																	<a href="#" class="btn btn-primary" id="add-more-city">Add More</a>
																</div>
															</div>
														

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Adult</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(12 Yrs +)</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Child</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(02 - 11 Yrs )</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Infants</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>00</option>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																			<option>6</option>
																			<option>7</option>
																			<option>9</option>
																		</select>
																	</div>
																	<label class="label-detail">(Below 2 Yrs )</label>
																</div>
															</div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Stop</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>None Stop</option>
																			<option>One Stop</option>
																			<option>2+ stops</option>
																		</select>
																	</div>
																</div>
															</div>

															<div class="col-sm-4 col-md-4"></div>

															<div class="col-sm-4 col-md-4">
																<div class="form-group">
																	<label>Cabin Class</label>
																	<div class="common-select">
																		<select class="form-control">
																			<option>Economic</option>
																			<option>Premium Economic</option>
																			<option>Business</option>
																			<option>First</option>
																		</select>
																	</div>
																</div>
															</div>

															<div class="col-sm-12 col-md-12">
																<div class="h-airline clearfix">
															
																	<div class="airline-title clearfix">
																		<div class="airline-left clearfix">
																			<h6>airline</h6>
																		</div>

																		<div class="airline-right airline-right-three clearfix">
																			<a href="#" class="select-all-check">Select All</a>
																			<a href="#" class="unselect-all-check">unselect all</a>
																		</div>
																	</div>
															
																	<div class="ariline-name ariline-name-three clearfix">
																		<div class="check-box clearfix">
																			<div class="row">
																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="m_one" />
																								<label for="m_one">Spice jet</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="m_two" />
																								<label for="m_two">Jet Airways</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="m_three" />
																								<label for="m_three">British Airways </label>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="m_four" />
																								<label for="m_four">Emirates</label>
																							</div>
																						</div>
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="m_five" />
																								<label for="m_five">Air India</label>
																							</div>
																						</div>
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" name="fieldset-5" id="m_six" />
																								<label for="m_six">Indigo</label>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="col-sm-4 col-md-4">
																					<div class="row">
																						<div class="col-sm-12 col-md-12">
																							<div class="styled-input-single">
																								<input type="checkbox" class="input-open-three" id="m_seven" />
																								<label for="m_seven">GDS</label>
																							</div>
																						</div>

																						<div class="col-sm-12 col-md-12">
																							<div class="form-group gds-txt-three hidden">
																								<input type="text" class="form-control" />
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																
																</div>
															</div>

															<div class="col-sm-12 col-md-12">
																<div class="s-btn clearfix">
																	<a class="btn btn-default" href="#" role="button">search now</a>
																</div>
															</div>
														</div>
													</form>
												</div>
											
											</div>
										
										</div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
			
				</div>

				<div class="col-sm-6 col-md-6 padding journey-col-right">
				
					<div class="journey-right clearfix">
				
						<div class="journey-carousel">
							<div class="journey-item">
								<img src="assets/images/slider-img.jpg" alt="journey-img" />
								<div class="journey-caption clearfix" />
									<h6>from $960</h6>
									<h2>summer offer</h2>
									<p>july <span>19th</span> to july <span>26th</span></p>
								</div>
							</div>

							<div class="journey-item">
								<img src="assets/images/slider-img.jpg" alt="journey-img" />
								<div class="journey-caption clearfix">
									<h6>from $960</h6>
									<h2>summer offer</h2>
									<p>july <span>19th</span> to july <span>26th</span></p>
								</div>
							</div>

							<div class="journey-item">
								<img src="assets/images/slider-img.jpg" alt="journey-img" />
								<div class="journey-caption clearfix">
									<h6>from $960</h6>
									<h2>summer offer</h2>
									<p>july <span>19th</span> to july <span>26th</span></p>
								</div>
							</div>

							<div class="journey-item">
								<img src="assets/images/slider-img.jpg" alt="journey-img" />
								<div class="journey-caption clearfix">
									<h6>from $960</h6>
									<h2>summer offer</h2>
									<p>july <span>19th</span> to july <span>26th</span></p>
								</div>
							</div>

							<div class="journey-item">
								<img src="assets/images/slider-img.jpg" alt="journey-img" />
								<div class="journey-caption clearfix">
									<h6>from $960</h6>
									<h2>summer offer</h2>
									<p>july <span>19th</span> to july <span>26th</span></p>
								</div>
							</div>
						</div>
					

				
						<div class="recent-book-section clearfix">
							<div class="table-title clearfix">
								<h3>Recent Bookings</h3>
							</div>
							<div class="booking-table clearfix">
								<div class="table-responsive clearfix">
									<table>
										<thead>
											<tr>
												<th>name</th>
												<th>from</th>
												<th>to</th>
												<th>booking reference</th>
												<th>travel date time</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>Mr.amit patel </td>
												<td>amd</td>
												<td>del </td>
												<td>ams22432221</td>
												<td>25 apr 2019 14:30</td>
											</tr>

											<tr>
												<td>Mr.Raju Patel</td>
												<td>BOM</td>
												<td>AMD</td>
												<td>AMS22432221</td>
												<td>30 Apr 2019 16:30</td>
											</tr>

											<tr>
												<td>Mr.Prakash Shah</td>
												<td>Del</td>
												<td>AMD</td>
												<td>AMS22432221</td>
												<td>01 May 2019 05:20</td>
											</tr>

											<tr>
												<td>Mr.Nikki Shah</td>
												<td>AMD</td>
												<td>BOM</td>
												<td>AMS22432221</td>
												<td>01 May 2019 05:20</td>
											</tr>

											<tr>
												<td>Mr.Amit Patel</td>
												<td>AMD</td>
												<td>DEL</td>
												<td>AMS22432221</td>
												<td>25 Apr 2019 14:30 </td>
											</tr>

											<tr>
												<td>Mr.Raju Patel</td>
												<td>BOM</td>
												<td>AMD</td>
												<td>AMS22432221</td>
												<td>30 Apr 2019 16:30</td>
											</tr>

											<tr>
												<td>Mr.Prakash Shah</td>
												<td>Del</td>
												<td>AMD</td>
												<td>AMS22432221</td>
												<td>01 May 2019 05:20</td>
											</tr>

											<tr>
												<td>Mrs.Nikki Shah</td>
												<td>AMD</td>
												<td>BOM</td>
												<td>AMS22432221</td>
												<td>01 May 2019 05:20</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="table-btn clearfix">
									<a class="btn btn-default" href="#" role="button">View all</a>
								</div>
							</div>
						</div>
					
					</div>
					
				</div>
			</div>
		</div>
	</div>

    )
  }
}
export default Landing;

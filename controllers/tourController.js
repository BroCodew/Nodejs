/* eslint-disable no-console */
const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    console.log('queryObj', queryObj);
    const excludeFilter = ['sort', 'limit', 'page', 'fields'];
    excludeFilter.forEach(el => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => {
      return `$${match}`;
    });
    console.log('queryStr', queryStr);
    const query = await Tour.find(JSON.parse(queryStr));
    const tours = await query;
    console.log('query', query);
    console.log('tours', tours);

    console.log('11111111111');
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tours = await Tour.findById(req.params.id);
    //Tour.findOne({_id:req.params.id})
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};

exports.createTour = async (req, res) => {
  // console.log(req.body);
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    // Xóa tài liệu dựa trên ID
    await Tour.findByIdAndDelete(req.params.id);

    // Gửi phản hồi thành công với thông báo "message"
    res.status(204).json({
      status: 'success',
      message: 'Tour deleted successfully',
      data: null
    });
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};
